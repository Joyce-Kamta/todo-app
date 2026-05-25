// ========================================
// app.js — Le code de notre Todo List
// ========================================

// On crée une liste vide qui va stocker nos tâches
let todos = [];

// FONCTION 1 : Ajouter une tâche
// Reçoit un texte (ex: "Faire les courses")
// et l'ajoute dans le tableau todos
function ajouterTodo(texte) {
  if (!texte || texte.trim() === '') {
    throw new Error('Le texte de la tâche ne peut pas être vide');
  }
  const todo = {
    id: todos.length + 1,
    texte: texte,
    fait: false
  };
  todos.push(todo);
  return todo;
}

// FONCTION 2 : Récupérer toutes les tâches
// Retourne le tableau complet
function getTodos() {
  return todos;
}

// FONCTION 3 : Marquer une tâche comme faite
// Reçoit un id (ex: 1) et met fait=true
function marquerFait(id) {
  const todo = todos.find(t => t.id === id);
  if (!todo) {
    throw new Error('Tâche introuvable');
  }
  todo.fait = true;
  return todo;
}

// FONCTION 4 : Supprimer une tâche
function supprimerTodo(id) {
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) {
    throw new Error('Tâche introuvable');
  }
  todos.splice(index, 1);
  return true;
}

// FONCTION 5 : Remettre la liste à zéro
// (utile pour les tests)
function reinitialiser() {
  todos = [];
}

// On exporte les fonctions pour pouvoir
// les utiliser dans d'autres fichiers
module.exports = {
  ajouterTodo,
  getTodos,
  marquerFait,
  supprimerTodo,
  reinitialiser
};
