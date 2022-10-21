const iframe = document.createElement('iframe');
window.addEventListener("message", function(event) {
  event.data.map(p => {
    iframe.style[p.prop] = p.value;
  });
});
iframe.onload = function () {
 this.contentWindow.postMessage({ innerWidth: window.innerWidth }, '*');
}
iframe.setAttribute('src', 'https://mucoban.github.io/chat-on-angular');
iframe.style.position = 'fixed';
iframe.style.bottom = '0px';
iframe.style.right = '20px';
iframe.style.border = '0';
document.body.appendChild(iframe);
