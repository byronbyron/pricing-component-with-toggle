const toggle = document.getElementById('pricing');

toggle.addEventListener('change', handleToggle);

function handleToggle(e) {
  if (e.target.checked) {
    console.log('monthly');
  } else {
    console.log('anually');
  }
}
