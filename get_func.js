function addArxivContent(img_, title_, author_, year_) {
    const container = document.getElementById('content-container'); // Assuming you have a div with this ID to hold the content
    
    const htmlContent = `
      <div class="row mt-2">
        <div class="col-md-1 pb-3 text-md-right text-left"></div>
        <div class="col-md-3 col-sm-11 pb-3 text-md-right text-left">
          <img class="img-fluid rounded paper-img" src="./materials/concept_figures/${img_}" alt="concept" >
        </div>
        <div class="col-md-7 col-sm-12 text-md-left text-center">              
          <div class="col text-left text-md-left">
            <h6 class="darkgray"><b>${title_}</b></h6>
            <p class="ssmall authors"><u><b>${author_}</b></u></p>
            <h6 class="pprint">arXiv ${year_}</h6>
            <h6 class="black">
              <a href="https://rheasukthanker.github.io/" target="_blank"><span class="badge badge-project">Project Page</span></a>
              <a href="https://rheasukthanker.github.io/" target="_blank"><span class="badge badge-pdf">Paper</span></a>                  
              <a href="https://rheasukthanker.github.io/" target="_blank"><span class="badge badge-code">Code</span></a>
              <a type="button" class="badge badge-bibtex" href="javascript:void(0)" onclick="show('bib${title_.replace(/\s+/g, '')}')">BibTeX</a>          
            </h6>
            <div id="bib${title_.replace(/\s+/g, '')}" class="popup">
              @article{name,<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;title={${title_}},<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;author={${author_}},<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;journal={},<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;year={${year_}},<br>                
              }
            </div>        
          </div>                            
        </div>
      </div>`;
  
    container.innerHTML += htmlContent;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('mode-toggle');
    toggleButton.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            toggleButton.textContent = 'Dark Mode 🌙';
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            toggleButton.textContent = 'Light Mode ☀️';
        }
    });
  });
  
  const toggleButton = document.getElementById('toggle-button');
  const navbarMenu = document.querySelector('.navbar-menu');
  
  toggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
  });
