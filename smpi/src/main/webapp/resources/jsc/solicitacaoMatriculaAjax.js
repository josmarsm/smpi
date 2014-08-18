
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (solicitacaoMatriculaAjax == null) var solicitacaoMatriculaAjax = {};
solicitacaoMatriculaAjax._path = '/aluno/dwr';
solicitacaoMatriculaAjax.setCursoService = function(p0, callback) {
  dwr.engine._execute(solicitacaoMatriculaAjax._path, 'solicitacaoMatriculaAjax', 'setCursoService', p0, callback);
}
solicitacaoMatriculaAjax.setAlunoCursoService = function(p0, callback) {
  dwr.engine._execute(solicitacaoMatriculaAjax._path, 'solicitacaoMatriculaAjax', 'setAlunoCursoService', p0, callback);
}
solicitacaoMatriculaAjax.setConfigCursoService = function(p0, callback) {
  dwr.engine._execute(solicitacaoMatriculaAjax._path, 'solicitacaoMatriculaAjax', 'setConfigCursoService', p0, callback);
}
solicitacaoMatriculaAjax.setTurmaService = function(p0, callback) {
  dwr.engine._execute(solicitacaoMatriculaAjax._path, 'solicitacaoMatriculaAjax', 'setTurmaService', p0, callback);
}
solicitacaoMatriculaAjax.findTurmas = function(p0, p1, callback) {
  dwr.engine._execute(solicitacaoMatriculaAjax._path, 'solicitacaoMatriculaAjax', 'findTurmas', p0, p1, callback);
}
solicitacaoMatriculaAjax.getTurmasByCurso = function(p0, p1, callback) {
  dwr.engine._execute(solicitacaoMatriculaAjax._path, 'solicitacaoMatriculaAjax', 'getTurmasByCurso', p0, p1, callback);
}
solicitacaoMatriculaAjax.findOutrosCursos = function(p0, callback) {
  dwr.engine._execute(solicitacaoMatriculaAjax._path, 'solicitacaoMatriculaAjax', 'findOutrosCursos', p0, callback);
}
