
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (portalAjax == null) var portalAjax = {};
portalAjax._path = '/aluno/dwr';
portalAjax.getCidades = function(p0, callback) {
  dwr.engine._execute(portalAjax._path, 'portalAjax', 'getCidades', p0, callback);
}
portalAjax.setCursoService = function(p0, callback) {
  dwr.engine._execute(portalAjax._path, 'portalAjax', 'setCursoService', p0, callback);
}
portalAjax.getEstados = function(p0, callback) {
  dwr.engine._execute(portalAjax._path, 'portalAjax', 'getEstados', p0, callback);
}
portalAjax.setEntidadeExternaService = function(p0, callback) {
  dwr.engine._execute(portalAjax._path, 'portalAjax', 'setEntidadeExternaService', p0, callback);
}
portalAjax.setAlunoCursoService = function(p0, callback) {
  dwr.engine._execute(portalAjax._path, 'portalAjax', 'setAlunoCursoService', p0, callback);
}
portalAjax.setHorarioTurmaService = function(p0, callback) {
  dwr.engine._execute(portalAjax._path, 'portalAjax', 'setHorarioTurmaService', p0, callback);
}
portalAjax.setSolicitacaoMatriculaService = function(p0, callback) {
  dwr.engine._execute(portalAjax._path, 'portalAjax', 'setSolicitacaoMatriculaService', p0, callback);
}
portalAjax.getEntidadesExternas = function(p0, callback) {
  dwr.engine._execute(portalAjax._path, 'portalAjax', 'getEntidadesExternas', p0, callback);
}
portalAjax.alterarSolicitacao = function(p0, callback) {
  dwr.engine._execute(portalAjax._path, 'portalAjax', 'alterarSolicitacao', p0, false, callback);
}
portalAjax.setCidadeService = function(p0, callback) {
  dwr.engine._execute(portalAjax._path, 'portalAjax', 'setCidadeService', p0, callback);
}
portalAjax.setTurmaDocenteService = function(p0, callback) {
  dwr.engine._execute(portalAjax._path, 'portalAjax', 'setTurmaDocenteService', p0, callback);
}
portalAjax.setTurmaService = function(p0, callback) {
  dwr.engine._execute(portalAjax._path, 'portalAjax', 'setTurmaService', p0, callback);
}
portalAjax.setVersaoCursoService = function(p0, callback) {
  dwr.engine._execute(portalAjax._path, 'portalAjax', 'setVersaoCursoService', p0, callback);
}
portalAjax.getVersoesCursos = function(p0, callback) {
  dwr.engine._execute(portalAjax._path, 'portalAjax', 'getVersoesCursos', p0, callback);
}
portalAjax.setAtividadeCurricularService = function(p0, callback) {
  dwr.engine._execute(portalAjax._path, 'portalAjax', 'setAtividadeCurricularService', p0, callback);
}
