document.addEventListener('DOMContentLoaded', function() {
  // Initialize all tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Real-time updates for cold storage (simulated)
  if (document.querySelector('.temperature-monitoring')) {
      setInterval(() => {
          // This would be replaced with actual API calls in a real application
          const temps = document.querySelectorAll('.display-4');
          temps.forEach(temp => {
              const currentTemp = parseFloat(temp.textContent);
              const randomChange = (Math.random() * 0.4 - 0.2).toFixed(1);
              const newTemp = (currentTemp + parseFloat(randomChange)).toFixed(1);
              temp.textContent = newTemp + '°C';
              
              // Update color based on temperature
              if (temp.classList.contains('text-success') && newTemp > -15) {
                  temp.classList.remove('text-success');
                  temp.classList.add('text-warning');
              } else if (temp.classList.contains('text-warning') && newTemp > -12) {
                  temp.classList.remove('text-warning');
                  temp.classList.add('text-danger');
              } else if (temp.classList.contains('text-warning') && newTemp <= -15) {
                  temp.classList.remove('text-warning');
                  temp.classList.add('text-success');
              } else if (temp.classList.contains('text-danger') && newTemp <= -12) {
                  temp.classList.remove('text-danger');
                  temp.classList.add('text-warning');
              } else if (temp.classList.contains('text-danger') && newTemp <= -15) {
                  temp.classList.remove('text-danger');
                  temp.classList.add('text-success');
              }
          });
      }, 5000);
  }

  // Handle order status changes
  const statusButtons = document.querySelectorAll('.btn-status');
  statusButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault();
          const orderId = this.getAttribute('data-order');
          const newStatus = this.getAttribute('data-status');
          
          // In a real app, this would be an API call
          const statusBadge = document.querySelector(`.order-status-${orderId}`);
          if (statusBadge) {
              statusBadge.className = `badge bg-${this.getAttribute('data-status-class')} order-status-${orderId}`;
              statusBadge.textContent = newStatus;
              this.closest('tr').querySelector('.order-action a').textContent = 'View';
          }
      });
  });

  // Inventory chart (simplified)
  if (document.getElementById('inventoryChart')) {
      // This would be replaced with Chart.js in a real implementation
      console.log('Inventory chart would be initialized here');
  }
});