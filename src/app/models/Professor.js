const Professor = professor => ({
  objectId: professor._getId(),
  nome: professor.get('nome'),
  imagem: professor.get('imagem').url(),
  curriculo: professor.get('curriculo'),
  materia: professor.get('materia'),
  nota: professor.get('nota'),
  bairro: professor.get('bairro'),
})
export default Professor
