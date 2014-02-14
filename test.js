Tinytest.add("Foundation SCSS variables should be available", function(test) {
    var onscreenDiv = OnscreenDiv(Meteor.render(function() {
        return '<div class="test-row-width"></div>';
    }));

    var styledDiv = onscreenDiv.div.firstChild;

    test.equal(getStyleProperty(styledDiv, "width"), "50%");

    onscreenDiv.kill();
});

Tinytest.add("Foundation SCSS class should be extendable", function(test) {
    var onscreenDiv = OnscreenDiv(Meteor.render(function() {
        return '<a class="test-button-extended"></a>';
    }));

    var styledDiv = onscreenDiv.div.firstChild;

    test.equal(getStyleProperty(styledDiv, "display"), "inline-block");
    test.equal(getStyleProperty(styledDiv, "text-align"), "center");

    onscreenDiv.kill();
});

Tinytest.add("Foundation JavaScript extensions should be loaded", function(test) {
    test.isTrue(typeof $.fn.foundation !== 'undefined');
});
