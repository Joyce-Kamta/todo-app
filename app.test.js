// ========================================
// app.test.js — Les tests automatiques
// ========================================
// Ce fichier dit à Jest : 
// "vérifie que chaque fonction marche bien"

const { 
  ajouterTodo, 
  getTodos, 
  marquerFait, 
  supprimerTodo, 
  reinitialiser 
} = require('./app');

// Avant chaque test, on remet la liste à zéro
// pour que les tests ne se perturbent pas entre eux
beforeEach(() => {
  reinitialiser();
});

// TEST 1 — Est-ce qu'on peut ajouter une tâche ?
test('ajouter une tâche', () => {
  const todo = ajouterTodo('Faire les courses');
  expect(todo.texte).toBe('Faire les courses');
  expect(todo.fait).toBe(false);
  expect(getTodos().length).toBe(1);
});

// TEST 2 — Est-ce qu'on ne peut pas ajouter une tâche vide ?
test('refuser une tâche vide', () => {
  expect(() => ajouterTodo('')).toThrow('Le texte de la tâche ne peut pas être vide');
});

// TEST 3 — Est-ce qu'on peut marquer une tâche comme faite ?
test('marquer une tâche comme faite', () => {
  ajouterTodo('Apprendre Jenkins');
  const todo = marquerFait(1);
  expect(todo.fait).toBe(true);
});

// TEST 4 — Est-ce qu'on peut supprimer une tâche ?
test('supprimer une tâche', () => {
  ajouterTodo('Tâche à supprimer');
  supprimerTodo(1);
  expect(getTodos().length).toBe(0);
});

// TEST 5 — Est-ce qu'on récupère bien toutes les tâches ?
test('récupérer toutes les tâches', () => {
  ajouterTodo('Tâche 1');
  ajouterTodo('Tâche 2');
  ajouterTodo('Tâche 3');
  expect(getTodos().length).toBe(3);
});
