const t={form:document.querySelector("#task-form"),cardsList:document.querySelector("#task-list")},e=t=>`<li class="task-list-item">\n      <button class="task-list-item-btn" data-id='${t.id}'>Удалить</button>\n      <h3>${t.taskName}</h3>\n     <p>${t.taskText}</p>\n  </li>`,s=t=>{const e=JSON.parse(localStorage.getItem("tasks"))||[];e.push(t),localStorage.setItem("tasks",JSON.stringify(e))},a=()=>JSON.parse(localStorage.getItem("tasks")),r=t=>{const e=a().filter((e=>e.id!==t));localStorage.setItem("tasks",JSON.stringify(e))};let n=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"");const o=t=>{const e={id:n()};return new FormData(t).forEach(((t,s)=>{e[s]=t})),e};(()=>{const s=a();if(!s)return;const r=s.reduce(((t,s)=>t+e(s)),"");t.cardsList.insertAdjacentHTML("beforeend",r)})(),t.form.addEventListener("submit",(a=>{a.preventDefault();const r=o(t.form);s(r);const n=e(r);t.cardsList.insertAdjacentHTML("beforeend",n)})),t.cardsList.addEventListener("click",(t=>{if("BUTTON"===t.target.nodeName){t.target.parentNode.remove();const e=t.target.dataset.id;r(e)}}));
//# sourceMappingURL=index.1786ed49.js.map