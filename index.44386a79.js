const t=t=>{const s={};return new FormData(t).forEach(((t,e)=>{s[e]=t})),s},s=t=>{const s=JSON.parse(localStorage.getItem("tasks"))||[];s.push(t),localStorage.setItem("tasks",JSON.stringify(s))},e={form:document.querySelector("#task-form"),cardsList:document.querySelector("#task-list")},a=t=>`<li class="task-list-item">\n      <button class="task-list-item-btn">Удалить</button>\n      <h3>${t.taskName}</h3>\n     <p>${t.taskText}</p>\n  </li>`;e.form.addEventListener("submit",(n=>{n.preventDefault();const o=t(e.form);s(o);const r=a(o);e.cardsList.insertAdjacentHTML("beforeend",r)}));
//# sourceMappingURL=index.44386a79.js.map