document.getElementById('count-btn').addEventListener('click', function() {
    var textInput = document.getElementById('text-input').value;
    var words = textInput.trim().split(/\s+/);
    var wordCount = words.length;
    var charCount = textInput.length;
    var spaceCount = textInput.split(' ').length - 1;
    var sentenceCount = textInput.split(/[.?!]/g).filter(Boolean).length; 
    var paragraphCount = textInput.split(/\n\n/).length;
  
    document.getElementById('word-count').textContent = wordCount;
    document.getElementById('char-count').textContent = charCount;
    document.getElementById('space-count').textContent = spaceCount;
    document.getElementById('sentence-count').textContent = sentenceCount;
    document.getElementById('paragraph-count').textContent = paragraphCount;
  });