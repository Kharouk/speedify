console.log("I'm in lads.");

document.addEventListener('DOMContentLoaded', () => {
  let updateButton = document.querySelector('#update-speed--button');
  updateButton.addEventListener('click', (e) => {
    const speedSelection = document.querySelector(
      '#speed-select option:checked'
    ).value;
    console.log(speedSelection);
  });
});
