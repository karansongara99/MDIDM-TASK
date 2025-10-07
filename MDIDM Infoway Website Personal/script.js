// Modal Animation and Form Handling
document.addEventListener('DOMContentLoaded', function() {
    // Get the modal element
    const modal = document.getElementById('work-with-us-modal');
    const form = document.getElementById('contact-form-popup');
    const closeButton = modal.querySelector('.close');

    // Add smooth fade in animation when modal is shown
    modal.addEventListener('show.bs.modal', function() {
        // Add staggered animation for form rows
        const formRows = form.querySelectorAll('.form-row');
        formRows.forEach((row, index) => {
            setTimeout(() => {
                row.style.opacity = '1';
                row.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    });

    // Add smooth fade out animation when modal is hidden
    modal.addEventListener('hide.bs.modal', function() {
        const formRows = form.querySelectorAll('.form-row');
        formRows.forEach(row => {
            row.style.opacity = '0';
            row.style.transform = 'translateY(20px)';
        });
    });

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Add loading state
        const submitButton = form.querySelector('input[type="submit"]');
        const originalText = submitButton.value;
        submitButton.value = 'Submitting...';
        submitButton.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Reset form
            form.reset();
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success mt-3';
            successMessage.textContent = 'Thank you for your submission! We will contact you soon.';
            form.appendChild(successMessage);

            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
                submitButton.value = originalText;
                submitButton.disabled = false;
                modal.querySelector('.close').click(); // Close modal
            }, 3000);
        }, 1000);
    });

    // Add smooth hover animation to WORK WITH US button
    const workWithUsButton = document.querySelector('.custom-btn');
    if (workWithUsButton) {
        workWithUsButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        workWithUsButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});


$(document).ready(function(){
  var mainSlider = $(".we-work-slider");
  var navSlider = $(".we-work-navigation");

  // Main slider init
  mainSlider.owlCarousel({
    items: 1,
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    smartSpeed: 500,
    URLhashListener: true,
    startPosition: 'URLHash'
  });

  // Navigation slider
  navSlider.owlCarousel({
    items: 5,
    margin: 10,
    nav: true,
    dots: false,
    responsive:{
      0:{items:2},
      600:{items:4},
      1000:{items:6}
    }
  });

  // Click nav -> slide content
  $(".we-work-navigation a").on("click", function(){
    var index = $(this).data("item") - 1;
    mainSlider.trigger("to.owl.carousel", [index, 300]);
    $(".we-work-navigation a").removeClass("active");
    $(this).addClass("active");
  });

  // Sync nav when slide changes
  mainSlider.on("changed.owl.carousel", function(event) {
    var index = event.item.index + 1;
    $(".we-work-navigation a").removeClass("active");
    $(".we-work-navigation a[data-item='" + index + "']").addClass("active");
  });

  // Initial active
  $(".we-work-navigation a[data-item='1']").addClass("active");
});
