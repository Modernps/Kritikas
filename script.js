function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Define the love notes content
  const notes = {
    note1: 'Your smile lights up my world.',
    note2: 'You’re my everything, and I’m so lucky to have you.',
    note3: 'I promise to always be there for you, forever and always.'
  };
  
  // Function to display the selected note in the modal
  function showNote(noteId) {
    const modal = document.getElementById('note-modal');
    const noteText = document.getElementById('note-text');
    
    // Set the note text from the notes object
    noteText.textContent = notes[noteId];
    
    // Display the modal
    modal.style.display = 'flex';
  }
  
  // Function to close the modal
  function closeNote() {
    const modal = document.getElementById('note-modal');
    
    // Hide the modal
    modal.style.display = 'none';
  }
  
  // Close modal if clicking outside of it
  window.onclick = function(event) {
    const modal = document.getElementById('note-modal');
    
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };