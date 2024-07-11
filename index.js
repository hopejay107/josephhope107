        function openMenu() {
            document.querySelector('.navbar').style.display = 'block';
          }
          
          function closeMenu() {
            document.querySelector('.navbar').style.display = 'none';
          }


          
  const slider = document.querySelector("[data-slider]");
  const sliderContainer = document.querySelector("[data-slider-container]");
  const sliderPrevBtn = document.querySelector("[data-slider-prev]");
  const sliderNextBtn = document.querySelector("[data-slider-next]");
  
  let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
  let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
  
  let currentSlidePos = 0;
  
  const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  }
  
  const slideNext = function () {
    const slideEnd = currentSlidePos >= totalSlidableItems;
  
    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }
    moveSliderItem();
  }
  
  sliderNextBtn.addEventListener("click", slideNext);


  function opentab(tabName) {
    var i, tablinks, tabcontents;
    
    tabcontents = document.getElementsByClassName("tab-contents");
    for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
        tabcontents[i].classList.remove("active-tab");
    }
    
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

// Default open tab
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tab-links")[0].click();
});



//services

document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.5
    });

    services.forEach(service => {
        observer.observe(service);
    });
});



//contact

function whatsapp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+260974488902&text=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
    
    window.open(whatsappUrl, '_blank');
}



//email btn


function handleButtonClick() {
    const email = document.getElementById('input-field').value;
    if (email) {
        alert(`You entered: ${email}`);
        // You can add additional logic here
    } else {
        alert('Please enter an email address.');
    }
}