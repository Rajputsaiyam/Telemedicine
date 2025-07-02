document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.getElementById('main-header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    } else {
        console.error('Header element not found');
    }

    // Modal functionality
    const modal = document.getElementById("appointmentModal");
    const btn = document.getElementById("openModalBtn");
    const span = document.getElementsByClassName("close")[0];

    if (modal && btn && span) {
        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {
        console.error('Modal or button element(s) not found');
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


function closeThankYouPopup() {
    document.getElementById('thankYouPopup').style.display = 'none';
}

function showLoading() {
    // Hide the thank you popup
    closeThankYouPopup();
    
    // Show the loading popup
    document.getElementById('loadingPopup').style.display = 'flex';

    // Simulate a 4-second loading time
    setTimeout(() => {
        // Redirect to the video consultation link
        window.location.href = 'http://localhost:3030/7eaaaaf0-293c-43a7-b60e-19517b78d598'; // Replace with your video link
    }, 4000);
}












// Share room link functionality
function shareRoomLink() {
    const roomLink = `${window.location.origin}${window.location.pathname}?room=${ROOM_ID}`;
    document.getElementById('roomLink').value = roomLink;
    document.getElementById('shareModal').style.display = 'block';
  }
  
  function closeShareModal() {
    document.getElementById('shareModal').style.display = 'none';
  }
  
  function copyRoomLink() {
    const roomLink = document.getElementById('roomLink');
    roomLink.select();
    document.execCommand('copy');
    alert('Meeting link copied to clipboard!');
  }
  
  // Close modal when clicking outside of it
  window.onclick = function(event) {
    const modal = document.getElementById('shareModal');
    if (event.target == modal) {
      closeShareModal();
    }
  }
  
  // Check for room ID in URL on page load
  window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const roomParam = urlParams.get('room');
    
    if (roomParam && !ROOM_ID) {
      // If there's a room parameter in URL but no ROOM_ID set
      window.location.href = window.location.pathname + `?room=${roomParam}`;
    }
  }