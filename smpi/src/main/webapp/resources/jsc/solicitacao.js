function submete( form ) { var doc = document; organizaHiddens(doc.getElementById('prioridades')); doc.getElementById('confirmar').value = true; form.submit(); }function add( checkbox, idDisciplina, codigoTurma, idTurma ) { var doc = document; checkbox.parentNode.className='turmaSelecionada';var tbody = getById('prioridades'); var linhas = tbody.rows; var tr = doc.createElement('tr'); tr.id = 'linha' + idTurma;var tdOrdem = doc.createElement('td'); tdOrdem.innerHTML = (linhas.length + 1) + '�'; tdOrdem.style.width = '35px'; tdOrdem.align = 'center';var tdDisciplina = doc.createElement('td'); tdDisciplina.innerHTML = doc.getElementById('disciplina'+idDisciplina).innerHTML+'&nbsp;'+codigoTurma;var hidden = doc.createElement('input'); hidden.type = 'hidden'; var id = 'turmas[' + linhas.length + ']'; hidden.id = id; hidden.name = id; hidden.value = idTurma; tdDisciplina.appendChild(hidden);tr.appendChild(tdOrdem); tr.appendChild(tdDisciplina); tr.onclick = function() { selectRow(tr); }; tr.style.cursor = 'pointer'; tbody.appendChild(tr); }function remove( checkbox, idTurma ) { var doc = document; checkbox.parentNode.className='turma';var tbody = doc.getElementById('prioridades'); var row = doc.getElementById('linha' + idTurma); tbody.removeChild(row);organizaOrdens(tbody); organizaHiddens(tbody); }function organizaOrdens( tbody ) { var rows = tbody.rows; for ( var i = 0; i < rows.length; i++ ) { rows[i].cells[0].innerHTML = (i + 1) + '�'; } }function organizaHiddens( tbody ) { var rows = tbody.rows; for ( var i = 0; i < rows.length; i++ ) { var hidden = rows[i].getElementsByTagName('input')[0]; var id = 'turmas[' + i + ']'; hidden.id = id; hidden.name = id; } }function prioridade( checkbox, idDisciplina, codigoTurma, idTurma ) { if ( checkbox.checked ) { add(checkbox, idDisciplina,codigoTurma,idTurma); } else { remove(checkbox, idTurma); } }function showHideDisciplinas( linha, periodoIdeal ) { var disciplinasDiv = getById('disciplinas' + periodoIdeal); if ( disciplinasDiv.style.display != '' ) { linha.className='barraSelecionada'; show(disciplinasDiv); } else { linha.className='barra'; hide(disciplinasDiv); } }function ocultarBarraMsg() { hideById('barraMsg'); }function mostraDisciplinasCurso( turmas ) { var div = document.getElementById("disciplinasCurso");if(turmas == null || turmas.length == 0) { div.innerHTML = "<b>N�o h� turmas dispon�veis.</b>"; showById("disciplinasCurso"); return; }var htmlDiv = ''; htmlDiv += '<table class="tabelaDisciplinas">'; htmlDiv += '<tbody>'; for(var i = 0; i < turmas.length; i++) { var turma = turmas[i]; var disciplina = turma.disciplina; var nomeDisciplina = disciplina.nome;htmlDiv += '<tr>'; htmlDiv += '<td>'; htmlDiv += '<div id="disciplina' + disciplina.id + '"' +' class="divDisciplina">' + nomeDisciplina +' ('+disciplina.codigo + ')</div>'; htmlDiv += '<div class="turma" id="turma'+turma.id+'" >'; htmlDiv += '<input type="checkbox" onclick="prioridade(this, '+ disciplina.id + ', \'T. '+turma.codigo+'\',' + turma.id + ');"/> '; htmlDiv += '<span class="codigoTurma">&nbsp;T. '+turma.codigo+'</span>'; htmlDiv += '<table>'; htmlDiv += '<tbody>'; htmlDiv += '<tr>'; htmlDiv += '<td class="horarios">'; htmlDiv += '<span class="label">Hor�rios</span><br/>'; var horarios = turma.horariosTurma; if(horarios==null||horarios.length==0) { htmlDiv += '<em>n�o existe um hor�rio definido para esta turma.</em><br/>'; } else { for(var j = 0; j < horarios.length; j++) { var horario = horarios[j]; htmlDiv += horario.diaSemana.sigla+':&nbsp;'; htmlDiv += horario.horarioInicio + ' - ' + horario.horarioFim; htmlDiv += '<br/>'; } } htmlDiv += '</td>'; htmlDiv += '<td>'; htmlDiv += '<span class="label">Docentes</span><br/>'; var turmasDocentes = turma.docentes; if(turmasDocentes==null||turmasDocentes.length==0) { htmlDiv += '<em>n�o existem docentes definidos para esta turma.</em>'; } else { for(var k = 0; k < turmasDocentes.length; k++) { var turmaDocente = turmasDocentes[k]; htmlDiv += turmaDocente.docente.nome+'<br/>'; } } htmlDiv += '</td>'; htmlDiv += '</tr>'; htmlDiv += '</tbody>'; htmlDiv += '</table>'; htmlDiv += '</div>';htmlDiv += '</td>'; htmlDiv += '</tr>'; } htmlDiv += '</tbody>'; htmlDiv += '</table>';div.innerHTML = htmlDiv; showById('disciplinasCurso'); } function ativaAba( element ) { var doc = document; if ( element.id == 'solicitacaoAba' ) { doc.getElementById('statusAba').className = ''; doc.getElementById('statusDiv').style.display = 'none'; doc.getElementById('solicitacaoDiv').style.display = ''; element.className = 'active'; } else { doc.getElementById('solicitacaoAba').className = ''; doc.getElementById('solicitacaoDiv').style.display = 'none'; doc.getElementById('statusDiv').style.display = ''; element.className = 'active'; } }function moveDiv() { var doc = document; var elemento = doc.getElementById('prioridadeDiv'); if ( navigator.appName.indexOf("Microsoft") != -1 ) { var maxLimitTop = (this.maxLimitTop == null) ? (doc.documentElement.scrollHeight - doc.documentElement.clientHeight) : this.maxLimitTop;if ( doc.documentElement.scrollTop >= maxLimitTop ) { return; } } var top = window.pageYOffset || doc.documentElement.scrollTop || doc.body.scrollTop || 0; elemento.style.paddingTop = top + "px"; } function submitCanceladas( form ) { getById('confirmar').value = false; form.submit(); } function marcaDesmarcaLinha(check) { check.parentNode.parentNode.className = check.checked ? 'solicitacaoMarcada' : ''; }function buscaDisciplinas(periodo, alunoCurso) { var divTurmas = getById('disciplinas'+periodo); if(divTurmas==null) { solicitacaoMatriculaAjax.findTurmas(alunoCurso,periodo,function(turmas) { addTurmas(turmas,periodo); }); } else { selectBarra(periodo); } } function selectBarra(periodo) { var doc = document; var divDisciplinas = doc.getElementById('disciplinas'+periodo); var selecionado = doc.getElementById('AbreFechaPeriodo_'+periodo).className=='barraSelecionada'; var img = doc.getElementById('ImgAbreFecha_'+periodo); var newSrc = img.src; newSrc = newSrc.substring(0, newSrc.lastIndexOf('/')); if ( selecionado ) { doc.getElementById('AbreFechaPeriodo_'+periodo).className='barra'; doc.getElementById('BarraPeriodo_'+periodo).className='barra'; hide(divDisciplinas); newSrc += '/expand_blue.png'; } else { doc.getElementById('AbreFechaPeriodo_'+periodo).className='barraSelecionada'; doc.getElementById('BarraPeriodo_'+periodo).className='barraSelecionada'; show(divDisciplinas); newSrc += '/collapse_white.png'; } img.setAttribute('src', newSrc); } function addTurmas(mapDisciplinas, periodo) { var tablePeriodo = getById('Periodo_'+periodo); var conteudo = '<div id="disciplinas'+periodo+'" class="periodos"><br/><br/>'; if(mapDisciplinas!=null) { for(var key in mapDisciplinas ) { var turmas = mapDisciplinas[key]; var size = turmas.length; var disciplina = turmas[0].disciplina; conteudo+='<div id="disciplina'+disciplina.id+'" class="divDisciplina">'+disciplina.nome+' ('+disciplina.codigo+')</div>'; for(var i=0; i<size; i++) { var turma = turmas[i]; conteudo+='<div id="turma'+turma.id+'" class="turma">'; conteudo+='<input type="checkbox" onclick="prioridade(this,'+disciplina.id+',\'T. '+turma.codigo+'\','+turma.id+');"/><span class="codigoTurma">&nbsp;T. '+turma.codigo+'</span>'; conteudo+='<table class="tabelaTurma"><tr><td class="horarios"><span class="label">Hor�rios</span><br/>'; var horarios = turma.horariosTurma; var sizeHorarios; if(horarios == null ||(sizeHorarios = horarios.length)==0) { conteudo+='<em>n�o existe um hor�rio definido para esta turma.</em><br/>'; } else { for(var j=0; j< sizeHorarios; j++) { var horario = horarios[j]; conteudo+=horario.diaSemana.sigla+':&nbsp;'+horario.horarioInicio+' - '+horario.horarioFim+'<br/>'; } } conteudo+='</td><td><span class="label">Docentes</span><br/>';var docentes = turma.docentes; var sizeDocentes; if(docentes==null || (sizeDocentes = docentes.length)==0) { conteudo += '<em>n�o existem docentes definidos para esta turma.</em>'; } else { for(var j=0; j<sizeDocentes; j++) { var docente = docentes[j].docente.nome; conteudo+='Prof(a). '+docente+'<br/>'; } }conteudo+='</td>'; conteudo+='</table>'; conteudo+='</div>'; } } } else { conteudo += '<br/><em>N�o foram encontradas turmas ou todas j� foram solicitadas.</em>'; } conteudo+='</div>'; tablePeriodo.innerHTML+=conteudo; selectBarra(periodo); } function buscaOutrosCursos(periodo,alunoCurso) { var divCursos = getById('disciplinas'+periodo); if(divCursos==null) { solicitacaoMatriculaAjax.findOutrosCursos(alunoCurso,function(cursos) { addCursos(cursos,periodo); }); } else { selectBarra(periodo); } } function addCursos(cursos,periodo) { var tablePeriodo = getById('Periodo_'+periodo); var conteudo = '<div id="disciplinas'+periodo+'" class="periodos"><br/><br/>'; var size; if(cursos!=null&&(size=cursos.length)>0) { conteudo+='<select name="cursos" onchange="carregaDisciplinas(this);">'; conteudo+='<option value=""></option>'; for(var i=0; i<size; i++) { var curso = cursos[i]; conteudo+='<option value="'+curso.id+'">'+curso.nome+'</option>'; } conteudo+='</select>'; conteudo+='<div id="disciplinasCurso"></div>'; } else { conteudo += '<br/><em>N�o foram encontrados cursos com turmas dispon�veis.</em>'; } conteudo+='</div>'; tablePeriodo.innerHTML+=conteudo; selectBarra(periodo); } function abrePeriodo(periodo) { jQuery('#botaoProsseguirPendencias').click(); jQuery('#AbreFechaPeriodo_'+periodo).click(); } 