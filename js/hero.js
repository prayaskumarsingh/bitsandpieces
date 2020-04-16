let heroHTML = new String();

heroHTML = `
<div class="row align-items-center justify-content-center text-center">
  <div class="col-md-8" data-aos="fade-up" data-aos-delay="400">
    <h2 class="text-white font-weight-light mb-2 display-4">
      Episode ${episodesList[0].epNum}: ${episodesList[0].epName}
    </h2>
    <div class="text-white mb-4">
      <span class="text-white-opacity-05">
        <small> with ${episodesList[0].with} | ${episodesList[0].date} </small>
      </span>
    </div>
    <p>
      <a
        href="${episodesList[0].link}"
        class="btn btn-primary btn-sm py-3 px-4 small"
      >
        Watch the Episode
      </a>
    </p>
  </div>
</div>;
`;

document.getElementById("hero").innerHTML = heroHTML;
