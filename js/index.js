(function() {
    var page = {
        controler: function() {
            this._init();
            this.click();
        },
        _init: function() {
            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                //alert(navigator.userAgent); 

                //add a new meta node of viewport in head node
                head = document.getElementsByTagName('head');
                viewport = document.createElement('meta');
                viewport.name = 'viewport';
                viewport.content = 'target-densitydpi=device-dpi, width=' + 640 + 'px, user-scalable=no';
                head.length > 0 && head[head.length - 1].appendChild(viewport);
            }
        },
        // Get Dom Element
        $: function(id) {
            return document.getElementById(id);
        },
        click: function() {
            var _this = this;
            _this.$("next").addEventListener("click", function() {
                _this.$("main").style.display = "none";
                _this.$("page").style.display = "block";
            }, false);

            _this.$("continue").addEventListener("click", function() {
                window.location.href = "next.html";
            }, false);
        }
    };

    page.controler();
})();