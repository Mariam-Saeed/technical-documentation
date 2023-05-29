const codeSnippets = document.querySelectorAll('pre');

// create element for icon
const copyIcon = document.createElement('img');
copyIcon.src = '/copy.png';
copyIcon.alt = 'copy-img';
copyIcon.className = 'icon';
console.log(copyIcon);

// add icons to the code snippets
codeSnippets.forEach((code) => {
  code.prepend(copyIcon.cloneNode(true));
});

const icons = document.querySelectorAll('.icon');

const handleClick = (e) => {
  if (e.target.alt === 'copy-img') {
    const code = e.currentTarget.querySelector('code');
    copyText(code);
  }
};

const copyText = (code) => {
  navigator.clipboard.writeText(code.textContent);
};

codeSnippets.forEach((code) => {
  code.addEventListener('click', handleClick);
});
