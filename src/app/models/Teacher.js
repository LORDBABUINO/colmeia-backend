const Teacher = teacher => ({
  objectId: teacher._getId(),
  nome: teacher.get('nome'),
  imagem: teacher.get('imagem').url(),
  curriculo: teacher.get('curriculo'),
  materia: teacher.get('materia'),
  nota: teacher.get('nota'),
  bairro: teacher.get('bairro'),
})
export default Teacher
