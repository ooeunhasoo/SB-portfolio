const modal=document.querySelector('dialog');
let opener;
document.querySelectorAll('[data-detail]').forEach(button=>button.addEventListener('click',()=>{opener=button;const source=document.getElementById(button.dataset.detail);document.getElementById('detail-content').replaceChildren(source.content.cloneNode(true));modal.showModal();}));
document.querySelector('.close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',event=>{if(event.target===modal){const r=modal.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)modal.close();}});
modal.addEventListener('close',()=>opener?.focus());
