const categories = { Kotlin: [{ url: `/posts/the-needlessly-complex/`, date: `13 May 2022`, title: `The Needlessly Complex Fledgling Mission to Autonomously Propagate Plants`},],React: [{ url: `/posts/the-needlessly-complex/`, date: `13 May 2022`, title: `The Needlessly Complex Fledgling Mission to Autonomously Propagate Plants`},],DIY: [{ url: `/posts/the-needlessly-complex/`, date: `13 May 2022`, title: `The Needlessly Complex Fledgling Mission to Autonomously Propagate Plants`},],Electronics: [{ url: `/posts/the-needlessly-complex/`, date: `13 May 2022`, title: `The Needlessly Complex Fledgling Mission to Autonomously Propagate Plants`},],Irrigation Project: [{ url: `/posts/the-needlessly-complex/`, date: `13 May 2022`, title: `The Needlessly Complex Fledgling Mission to Autonomously Propagate Plants`},], }

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText];
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};