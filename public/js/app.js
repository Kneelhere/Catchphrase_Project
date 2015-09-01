// On page load
$(function() {
  pageLoad();
});

//functions

function pageLoad() {
  // load phrases
  getPhrases();
  // set event listeners
  $("#new-phrases-form").on("submit", function(e){
    // prevent form submission
    e.preventDefault();
    // post to phrases#create
    $.post("/phrases", $(this).serialize())
      .done(function(res){
        // append new phrases to the page
        getPhrases();
        $("#new-phrases-form")[0].reset();
      });
  });
}

function getPhrases() {
  $.get("/phrases", function(res){
    var phrases = res.reverse();
    // grab phrases template
    renderPhrases(phrases)
  });
}

function renderPhrases(phrases) {
  template = _.template($("#phrases-template").html());
  // input phrases into template and append to parent
  phraseItems = phrases.map(function(phrase) {
    return template(phrase);
  });
  // clear content (for repeated use)
  $("#phrases-ul").html("");
  // append phrases to ul
  $("#phrases-ul").append(phraseItems);
}

function deletePhrase(context) {
  var phraseId = $(context).data()._id;
  $.ajax({
    url: '/phrases/' + phraseId,
    type: 'DELETE',
    success: function(res) {
      // once successfull, re-render all phrases
      getPhrases();
    }
  });
}