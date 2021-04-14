function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let latRule = document.querySelector('#latitude-rule')
  let longRule = document.querySelector('#longitude-rule')
  latRule.hidden = true;
  longRule.hidden = true;

  let lat = document.querySelector('#location-lat').value;
  let long = document.querySelector('#location-long').value;
  

  if (lat < -90 || lat > 90)  latRule.hidden = false;
  if (long <-180 || long > 180) longRule.hidden = false;
  return ( latRule.hidden && longRule.hidden);
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
