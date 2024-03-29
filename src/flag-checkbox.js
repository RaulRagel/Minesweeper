


function FlagCheckbox() {
    action = function(e) {
        flagMode = e.target.checked;
    }
    init = function() {
        document.querySelector(".flag-checkbox input").addEventListener("change", this.action)
    }()
}
