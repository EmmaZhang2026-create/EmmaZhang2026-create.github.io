const tabs = document.querySelectorAll('.tab');
const pages = document.querySelectorAll('.page');
const language = document.querySelector('#language');
let english = false;

tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(item => item.classList.toggle('active', item === tab));
  pages.forEach(page => page.classList.toggle('active', page.id === tab.dataset.page));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}));

language.addEventListener('click', () => {
  english = !english;
  document.documentElement.lang = english ? 'en' : 'zh-CN';
  document.querySelectorAll('[data-zh]').forEach(node => {
    node.innerHTML = node.dataset[english ? 'en' : 'zh'];
  });
  language.innerHTML = english ? 'ZH / <span>EN</span>' : '<span>中</span> / EN';
});
