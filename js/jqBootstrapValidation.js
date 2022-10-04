<<<<<<< HEAD
(function(e){var a=[];var f={options:{prependExistingHelpBlock:false,sniffHtml:true,preventSubmit:true,submitError:false,submitSuccess:false,semanticallyStrict:false,autoAdd:{helpBlocks:true},filter:function(){return true}},methods:{init:function(i){var j=e.extend(true,{},f);j.options=e.extend(true,j.options,i);var k=this;var h=e.unique(k.map(function(){return e(this).parents("form")[0]}).toArray());e(h).bind("submit",function(n){var l=e(this);var o=0;var m=l.find("input,textarea,select").not("[type=submit],[type=image]").filter(j.options.filter);m.trigger("submit.validation").trigger("validationLostFocus.validation");m.each(function(p,q){var r=e(q),s=r.parents(".form-group, .checkbox").first();if(s.hasClass("warning")){s.removeClass("warning").addClass("error");o++}});m.trigger("validationLostFocus.validation");if(o){if(j.options.preventSubmit){n.preventDefault()}l.addClass("error");if(e.isFunction(j.options.submitError)){j.options.submitError(l,n,m.jqBootstrapValidation("collectErrors",true))}}else{l.removeClass("error");if(e.isFunction(j.options.submitSuccess)){j.options.submitSuccess(l,n)}}});return this.each(function(){var q=e(this),p=q.parents(".form-group, .checkbox").first(),t=p.find(".help-block").first(),v=q.parents("form").first(),l=[];if(!t.length&&j.options.autoAdd&&j.options.autoAdd.helpBlocks){t=e('<div class="help-block" />');p.append(t);a.push(t[0])}if(j.options.sniffHtml){var u="";if(q.attr("pattern")!==undefined){u="Not in the expected format<!-- data-validation-pattern-message to override -->";if(q.data("validationPatternMessage")){u=q.data("validationPatternMessage")}q.data("validationPatternMessage",u);q.data("validationPatternRegex",q.attr("pattern"))}if(q.attr("max")!==undefined||q.attr("aria-valuemax")!==undefined){var s=(q.attr("max")!==undefined?q.attr("max"):q.attr("aria-valuemax"));u="Too high: Maximum of '"+s+"'<!-- data-validation-max-message to override -->";if(q.data("validationMaxMessage")){u=q.data("validationMaxMessage")}q.data("validationMaxMessage",u);q.data("validationMaxMax",s)}if(q.attr("min")!==undefined||q.attr("aria-valuemin")!==undefined){var n=(q.attr("min")!==undefined?q.attr("min"):q.attr("aria-valuemin"));u="Too low: Minimum of '"+n+"'<!-- data-validation-min-message to override -->";if(q.data("validationMinMessage")){u=q.data("validationMinMessage")}q.data("validationMinMessage",u);q.data("validationMinMin",n)}if(q.attr("maxlength")!==undefined){u="Too long: Maximum of '"+q.attr("maxlength")+"' characters<!-- data-validation-maxlength-message to override -->";if(q.data("validationMaxlengthMessage")){u=q.data("validationMaxlengthMessage")}q.data("validationMaxlengthMessage",u);q.data("validationMaxlengthMaxlength",q.attr("maxlength"))}if(q.attr("minlength")!==undefined){u="Too short: Minimum of '"+q.attr("minlength")+"' characters<!-- data-validation-minlength-message to override -->";if(q.data("validationMinlengthMessage")){u=q.data("validationMinlengthMessage")}q.data("validationMinlengthMessage",u);q.data("validationMinlengthMinlength",q.attr("minlength"))}if(q.attr("required")!==undefined||q.attr("aria-required")!==undefined){u=j.builtInValidators.required.message;if(q.data("validationRequiredMessage")){u=q.data("validationRequiredMessage")}q.data("validationRequiredMessage",u)}if(q.attr("type")!==undefined&&q.attr("type").toLowerCase()==="number"){u=j.builtInValidators.number.message;if(q.data("validationNumberMessage")){u=q.data("validationNumberMessage")}q.data("validationNumberMessage",u)}if(q.attr("type")!==undefined&&q.attr("type").toLowerCase()==="email"){u="Not a valid email address<!-- data-validator-validemail-message to override -->";if(q.data("validationValidemailMessage")){u=q.data("validationValidemailMessage")}else{if(q.data("validationEmailMessage")){u=q.data("validationEmailMessage")}}q.data("validationValidemailMessage",u)}if(q.attr("minchecked")!==undefined){u="Not enough options checked; Minimum of '"+q.attr("minchecked")+"' required<!-- data-validation-minchecked-message to override -->";if(q.data("validationMincheckedMessage")){u=q.data("validationMincheckedMessage")}q.data("validationMincheckedMessage",u);q.data("validationMincheckedMinchecked",q.attr("minchecked"))}if(q.attr("maxchecked")!==undefined){u="Too many options checked; Maximum of '"+q.attr("maxchecked")+"' required<!-- data-validation-maxchecked-message to override -->";if(q.data("validationMaxcheckedMessage")){u=q.data("validationMaxcheckedMessage")}q.data("validationMaxcheckedMessage",u);q.data("validationMaxcheckedMaxchecked",q.attr("maxchecked"))}}if(q.data("validation")!==undefined){l=q.data("validation").split(",")}e.each(q.data(),function(w,x){var y=w.replace(/([A-Z])/g,",$1").split(",");if(y[0]==="validation"&&y[1]){l.push(y[1])}});var o=l;var r=[];do{e.each(l,function(w,x){l[w]=d(x)});l=e.unique(l);r=[];e.each(o,function(x,y){if(q.data("validation"+y+"Shortcut")!==undefined){e.each(q.data("validation"+y+"Shortcut").split(","),function(A,z){r.push(z)})}else{if(j.builtInValidators[y.toLowerCase()]){var w=j.builtInValidators[y.toLowerCase()];if(w.type.toLowerCase()==="shortcut"){e.each(w.shortcut.split(","),function(z,A){A=d(A);r.push(A);l.push(A)})}}}});o=r}while(o.length>0);var m={};e.each(l,function(x,z){var A=q.data("validation"+z+"Message");var C=(A!==undefined);var y=false;A=(A?A:"'"+z+"' validation failed <!-- Add attribute 'data-validation-"+z.toLowerCase()+"-message' to input to change this message -->");e.each(j.validatorTypes,function(D,E){if(m[D]===undefined){m[D]=[]}if(!y&&q.data("validation"+z+d(E.name))!==undefined){m[D].push(e.extend(true,{name:d(E.name),message:A},E.init(q,z)));y=true}});if(!y&&j.builtInValidators[z.toLowerCase()]){var w=e.extend(true,{},j.builtInValidators[z.toLowerCase()]);if(C){w.message=A}var B=w.type.toLowerCase();if(B==="shortcut"){y=true}else{e.each(j.validatorTypes,function(D,E){if(m[D]===undefined){m[D]=[]}if(!y&&B===D.toLowerCase()){q.data("validation"+z+d(E.name),w[E.name.toLowerCase()]);m[B].push(e.extend(w,E.init(q,z)));y=true}})}}if(!y){e.error("Cannot find validation info for '"+z+"'")}});t.data("original-contents",(t.data("original-contents")?t.data("original-contents"):t.html()));t.data("original-role",(t.data("original-role")?t.data("original-role"):t.attr("role")));p.data("original-classes",(p.data("original-clases")?p.data("original-classes"):p.attr("class")));q.data("original-aria-invalid",(q.data("original-aria-invalid")?q.data("original-aria-invalid"):q.attr("aria-invalid")));q.bind("validation.validation",function(x,z){var y=c(q);var w=[];e.each(m,function(A,B){if(y||y.length||(z&&z.includeEmpty)||(!!j.validatorTypes[A].blockSubmit&&z&&!!z.submitting)){e.each(B,function(D,C){if(j.validatorTypes[A].validate(q,y,C)){w.push(C.message)}})}});return w});q.bind("getValidators.validation",function(){return m});q.bind("submit.validation",function(){return q.triggerHandler("change.validation",{submitting:true})});q.bind(["keyup","focus","blur","click","keydown","keypress","change"].join(".validation ")+".validation",function(y,z){var x=c(q);var w=[];p.find("input,textarea,select").each(function(C,D){var A=w.length;e.each(e(D).triggerHandler("validation.validation",z),function(E,F){w.push(F)});if(w.length>A){e(D).attr("aria-invalid","true")}else{var B=q.data("original-aria-invalid");e(D).attr("aria-invalid",(B!==undefined?B:false))}});v.find("input,select,textarea").not(q).not('[name="'+q.attr("name")+'"]').trigger("validationLostFocus.validation");w=e.unique(w.sort());if(w.length){p.removeClass("success error").addClass("warning");if(j.options.semanticallyStrict&&w.length===1){t.html(w[0]+(j.options.prependExistingHelpBlock?t.data("original-contents"):""))}else{t.html('<ul class="list-unstyled alert alert-warning" role="alert"><li>'+w.join("</li><li>")+"</li></ul>"+(j.options.prependExistingHelpBlock?t.data("original-contents"):""))}}else{p.removeClass("warning error success");if(x.length>0){p.addClass("success")}t.html(t.data("original-contents"))}if(y.type==="blur"){p.removeClass("success")}});q.bind("validationLostFocus.validation",function(){p.removeClass("success")})})},destroy:function(){return this.each(function(){var h=e(this),j=h.parents(".form-group, .checkbox").first(),i=j.find(".help-block").first();h.unbind(".validation");i.html(i.data("original-contents"));j.attr("class",j.data("original-classes"));h.attr("aria-invalid",h.data("original-aria-invalid"));i.attr("role",h.data("original-role"));if(a.indexOf(i[0])>-1){i.remove()}})},collectErrors:function(h){var i={};this.each(function(l,m){var k=e(m);var j=k.attr("name");var n=k.triggerHandler("validation.validation",{includeEmpty:true});i[j]=e.extend(true,n,i[j])});e.each(i,function(j,k){if(k.length===0){delete i[j]}});return i},hasErrors:function(){var h=[];this.each(function(j,k){h=h.concat(e(k).triggerHandler("getValidators.validation")?e(k).triggerHandler("validation.validation",{submitting:true}):[])});return(h.length>0)},override:function(h){f=e.extend(true,f,h)}},validatorTypes:{callback:{name:"callback",init:function(i,h){return{validatorName:h,callback:i.data("validation"+h+"Callback"),lastValue:i.val(),lastValid:true,lastFinished:true}},validate:function(k,j,i){if(i.lastValue===j&&i.lastFinished){return !i.lastValid}if(i.lastFinished===true){i.lastValue=j;i.lastValid=true;i.lastFinished=false;var l=i;var h=k;b(i.callback,window,k,j,function(m){if(l.lastValue===m.value){l.lastValid=m.valid;if(m.message){l.message=m.message}l.lastFinished=true;h.data("validation"+l.validatorName+"Message",l.message);setTimeout(function(){h.trigger("change.validation")},1)}})}return false}},ajax:{name:"ajax",init:function(i,h){return{validatorName:h,url:i.data("validation"+h+"Ajax"),lastValue:i.val(),lastValid:true,lastFinished:true}},validate:function(j,i,h){if(""+h.lastValue===""+i&&h.lastFinished===true){return h.lastValid===false}if(h.lastFinished===true){h.lastValue=i;h.lastValid=true;h.lastFinished=false;e.ajax({url:h.url,data:"value="+i+"&field="+j.attr("name"),dataType:"json",success:function(k){if(""+h.lastValue===""+k.value){h.lastValid=!!(k.valid);if(k.message){h.message=k.message}h.lastFinished=true;j.data("validation"+h.validatorName+"Message",h.message);setTimeout(function(){j.trigger("change.validation")},1)}},failure:function(){h.lastValid=true;h.message="ajax call failed";h.lastFinished=true;j.data("validation"+h.validatorName+"Message",h.message);setTimeout(function(){j.trigger("change.validation")},1)}})}return false}},regex:{name:"regex",init:function(i,h){return{regex:g(i.data("validation"+h+"Regex"))}},validate:function(j,i,h){return(!h.regex.test(i)&&!h.negative)||(h.regex.test(i)&&h.negative)}},required:{name:"required",init:function(i,h){return{}},validate:function(j,i,h){return !!(i.length===0&&!h.negative)||!!(i.length>0&&h.negative)},blockSubmit:true},match:{name:"match",init:function(j,h){var i=j.parents("form").first().find('[name="'+j.data("validation"+h+"Match")+'"]').first();i.bind("validation.validation",function(){j.trigger("change.validation",{submitting:true})});return{element:i}},validate:function(j,i,h){return(i!==h.element.val()&&!h.negative)||(i===h.element.val()&&h.negative)},blockSubmit:true},max:{name:"max",init:function(i,h){return{max:i.data("validation"+h+"Max")}},validate:function(j,i,h){return(parseFloat(i,10)>parseFloat(h.max,10)&&!h.negative)||(parseFloat(i,10)<=parseFloat(h.max,10)&&h.negative)}},min:{name:"min",init:function(i,h){return{min:i.data("validation"+h+"Min")}},validate:function(j,i,h){return(parseFloat(i)<parseFloat(h.min)&&!h.negative)||(parseFloat(i)>=parseFloat(h.min)&&h.negative)}},maxlength:{name:"maxlength",init:function(i,h){return{maxlength:i.data("validation"+h+"Maxlength")}},validate:function(j,i,h){return((i.length>h.maxlength)&&!h.negative)||((i.length<=h.maxlength)&&h.negative)}},minlength:{name:"minlength",init:function(i,h){return{minlength:i.data("validation"+h+"Minlength")}},validate:function(j,i,h){return((i.length<h.minlength)&&!h.negative)||((i.length>=h.minlength)&&h.negative)}},maxchecked:{name:"maxchecked",init:function(j,h){var i=j.parents("form").first().find('[name="'+j.attr("name")+'"]');i.bind("click.validation",function(){j.trigger("change.validation",{includeEmpty:true})});return{maxchecked:j.data("validation"+h+"Maxchecked"),elements:i}},validate:function(j,i,h){return(h.elements.filter(":checked").length>h.maxchecked&&!h.negative)||(h.elements.filter(":checked").length<=h.maxchecked&&h.negative)},blockSubmit:true},minchecked:{name:"minchecked",init:function(j,h){var i=j.parents("form").first().find('[name="'+j.attr("name")+'"]');i.bind("click.validation",function(){j.trigger("change.validation",{includeEmpty:true})});return{minchecked:j.data("validation"+h+"Minchecked"),elements:i}},validate:function(j,i,h){return(h.elements.filter(":checked").length<h.minchecked&&!h.negative)||(h.elements.filter(":checked").length>=h.minchecked&&h.negative)},blockSubmit:true}},builtInValidators:{email:{name:"Email",type:"shortcut",shortcut:"validemail"},validemail:{name:"Validemail",type:"regex",regex:"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,10}",message:"Not a valid email address<!-- data-validator-validemail-message to override -->"},passwordagain:{name:"Passwordagain",type:"match",match:"password",message:"Does not match the given password<!-- data-validator-paswordagain-message to override -->"},positive:{name:"Positive",type:"shortcut",shortcut:"number,positivenumber"},negative:{name:"Negative",type:"shortcut",shortcut:"number,negativenumber"},number:{name:"Number",type:"regex",regex:"([+-]?\\\d+(\\.\\\d*)?([eE][+-]?[0-9]+)?)?",message:"Must be a number<!-- data-validator-number-message to override -->"},integer:{name:"Integer",type:"regex",regex:"[+-]?\\\d+",message:"No decimal places allowed<!-- data-validator-integer-message to override -->"},positivenumber:{name:"Positivenumber",type:"min",min:0,message:"Must be a positive number<!-- data-validator-positivenumber-message to override -->"},negativenumber:{name:"Negativenumber",type:"max",max:0,message:"Must be a negative number<!-- data-validator-negativenumber-message to override -->"},required:{name:"Required",type:"required",message:"This is required<!-- data-validator-required-message to override -->"},checkone:{name:"Checkone",type:"minchecked",minchecked:1,message:"Check at least one option<!-- data-validation-checkone-message to override -->"}}};var d=function(h){return h.toLowerCase().replace(/(^|\s)([a-z])/g,function(i,k,j){return k+j.toUpperCase()})};var c=function(j){var i=j.val();var h=j.attr("type");if(h==="checkbox"){i=(j.is(":checked")?i:"")}if(h==="radio"){i=(e('input[name="'+j.attr("name")+'"]:checked').length>0?i:"")}return i};function g(h){return new RegExp("^"+h+"$")}function b(n,k){var h=Array.prototype.slice.call(arguments).splice(2);var m=n.split(".");var l=m.pop();for(var j=0;j<m.length;j++){k=k[m[j]]}return k[l].apply(this,h)}e.fn.jqBootstrapValidation=function(h){if(f.methods[h]){return f.methods[h].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof h==="object"||!h){return f.methods.init.apply(this,arguments)}else{e.error("Method "+h+" does not exist on jQuery.jqBootstrapValidation");return null}}};e.jqBootstrapValidation=function(h){e(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments)}})(jQuery);
=======
/* jqBootstrapValidation
 * A plugin for automating validation on Twitter Bootstrap formatted forms.
 *
 * v1.3.6
 *
 * License: MIT <http://opensource.org/licenses/mit-license.php> - see LICENSE file
 *
 * http://ReactiveRaven.github.com/jqBootstrapValidation/
 */

(function( $ ){

	var createdElements = [];

	var defaults = {
		options: {
			prependExistingHelpBlock: false,
			sniffHtml: true, // sniff for 'required', 'maxlength', etc
			preventSubmit: true, // stop the form submit event from firing if validation fails
			submitError: false, // function called if there is an error when trying to submit
			submitSuccess: false, // function called just before a successful submit event is sent to the server
            semanticallyStrict: false, // set to true to tidy up generated HTML output
			autoAdd: {
				helpBlocks: true
			},
            filter: function () {
                // return $(this).is(":visible"); // only validate elements you can see
                return true; // validate everything
            }
		},
    methods: {
      init : function( options ) {

        var settings = $.extend(true, {}, defaults);

        settings.options = $.extend(true, settings.options, options);

        var $siblingElements = this;

        var uniqueForms = $.unique(
          $siblingElements.map( function () {
            return $(this).parents("form")[0];
          }).toArray()
        );

        $(uniqueForms).bind("submit", function (e) {
          var $form = $(this);
          var warningsFound = 0;
          var $inputs = $form.find("input,textarea,select").not("[type=submit],[type=image]").filter(settings.options.filter);
          $inputs.trigger("submit.validation").trigger("validationLostFocus.validation");

          $inputs.each(function (i, el) {
            var $this = $(el),
              $controlGroup = $this.parents(".form-group, .checkbox").first();
            if (
              $controlGroup.hasClass("warning")
            ) {
              $controlGroup.removeClass("warning").addClass("error");
              warningsFound++;
            }
          });

          $inputs.trigger("validationLostFocus.validation");

          if (warningsFound) {
            if (settings.options.preventSubmit) {
              e.preventDefault();
            }
            $form.addClass("error");
            if ($.isFunction(settings.options.submitError)) {
              settings.options.submitError($form, e, $inputs.jqBootstrapValidation("collectErrors", true));
            }
          } else {
            $form.removeClass("error");
            if ($.isFunction(settings.options.submitSuccess)) {
              settings.options.submitSuccess($form, e);
            }
          }
        });

        return this.each(function(){

          // Get references to everything we're interested in
          var $this = $(this),
            $controlGroup = $this.parents(".form-group, .checkbox").first(),
            $helpBlock = $controlGroup.find(".help-block").first(),
            $form = $this.parents("form").first(),
            validatorNames = [];

          // create message container if not exists
          if (!$helpBlock.length && settings.options.autoAdd && settings.options.autoAdd.helpBlocks) {
              $helpBlock = $('<div class="help-block" />');
              $controlGroup.append($helpBlock);
							createdElements.push($helpBlock[0]);
          }

          // =============================================================
          //                                     SNIFF HTML FOR VALIDATORS
          // =============================================================

          // *snort sniff snuffle*

          if (settings.options.sniffHtml) {
            var message = "";
            // ---------------------------------------------------------
            //                                                   PATTERN
            // ---------------------------------------------------------
            if ($this.attr("pattern") !== undefined) {
              message = "Not in the expected format<!-- data-validation-pattern-message to override -->";
              if ($this.data("validationPatternMessage")) {
                message = $this.data("validationPatternMessage");
              }
              $this.data("validationPatternMessage", message);
              $this.data("validationPatternRegex", $this.attr("pattern"));
            }
            // ---------------------------------------------------------
            //                                                       MAX
            // ---------------------------------------------------------
            if ($this.attr("max") !== undefined || $this.attr("aria-valuemax") !== undefined) {
              var max = ($this.attr("max") !== undefined ? $this.attr("max") : $this.attr("aria-valuemax"));
              message = "Too high: Maximum of '" + max + "'<!-- data-validation-max-message to override -->";
              if ($this.data("validationMaxMessage")) {
                message = $this.data("validationMaxMessage");
              }
              $this.data("validationMaxMessage", message);
              $this.data("validationMaxMax", max);
            }
            // ---------------------------------------------------------
            //                                                       MIN
            // ---------------------------------------------------------
            if ($this.attr("min") !== undefined || $this.attr("aria-valuemin") !== undefined) {
              var min = ($this.attr("min") !== undefined ? $this.attr("min") : $this.attr("aria-valuemin"));
              message = "Too low: Minimum of '" + min + "'<!-- data-validation-min-message to override -->";
              if ($this.data("validationMinMessage")) {
                message = $this.data("validationMinMessage");
              }
              $this.data("validationMinMessage", message);
              $this.data("validationMinMin", min);
            }
            // ---------------------------------------------------------
            //                                                 MAXLENGTH
            // ---------------------------------------------------------
            if ($this.attr("maxlength") !== undefined) {
              message = "Too long: Maximum of '" + $this.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->";
              if ($this.data("validationMaxlengthMessage")) {
                message = $this.data("validationMaxlengthMessage");
              }
              $this.data("validationMaxlengthMessage", message);
              $this.data("validationMaxlengthMaxlength", $this.attr("maxlength"));
            }
            // ---------------------------------------------------------
            //                                                 MINLENGTH
            // ---------------------------------------------------------
            if ($this.attr("minlength") !== undefined) {
              message = "Too short: Minimum of '" + $this.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->";
              if ($this.data("validationMinlengthMessage")) {
                message = $this.data("validationMinlengthMessage");
              }
              $this.data("validationMinlengthMessage", message);
              $this.data("validationMinlengthMinlength", $this.attr("minlength"));
            }
            // ---------------------------------------------------------
            //                                                  REQUIRED
            // ---------------------------------------------------------
            if ($this.attr("required") !== undefined || $this.attr("aria-required") !== undefined) {
              message = settings.builtInValidators.required.message;
              if ($this.data("validationRequiredMessage")) {
                message = $this.data("validationRequiredMessage");
              }
              $this.data("validationRequiredMessage", message);
            }
            // ---------------------------------------------------------
            //                                                    NUMBER
            // ---------------------------------------------------------
            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "number") {
              message = settings.builtInValidators.number.message;
              if ($this.data("validationNumberMessage")) {
                message = $this.data("validationNumberMessage");
              }
              $this.data("validationNumberMessage", message);
            }
            // ---------------------------------------------------------
            //                                                     EMAIL
            // ---------------------------------------------------------
            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "email") {
              message = "Not a valid email address<!-- data-validator-validemail-message to override -->";
              if ($this.data("validationValidemailMessage")) {
                message = $this.data("validationValidemailMessage");
              } else if ($this.data("validationEmailMessage")) {
                message = $this.data("validationEmailMessage");
              }
              $this.data("validationValidemailMessage", message);			  
            }
            // ---------------------------------------------------------
            //                                                MINCHECKED
            // ---------------------------------------------------------
            if ($this.attr("minchecked") !== undefined) {
              message = "Not enough options checked; Minimum of '" + $this.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->";
              if ($this.data("validationMincheckedMessage")) {
                message = $this.data("validationMincheckedMessage");
              }
              $this.data("validationMincheckedMessage", message);
              $this.data("validationMincheckedMinchecked", $this.attr("minchecked"));
            }
            // ---------------------------------------------------------
            //                                                MAXCHECKED
            // ---------------------------------------------------------
            if ($this.attr("maxchecked") !== undefined) {
              message = "Too many options checked; Maximum of '" + $this.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->";
              if ($this.data("validationMaxcheckedMessage")) {
                message = $this.data("validationMaxcheckedMessage");
              }
              $this.data("validationMaxcheckedMessage", message);
              $this.data("validationMaxcheckedMaxchecked", $this.attr("maxchecked"));
            }
          }

          // =============================================================
          //                                       COLLECT VALIDATOR NAMES
          // =============================================================

          // Get named validators
          if ($this.data("validation") !== undefined) {
            validatorNames = $this.data("validation").split(",");
          }

          // Get extra ones defined on the element's data attributes
          $.each($this.data(), function (i, el) {
            var parts = i.replace(/([A-Z])/g, ",$1").split(",");
            if (parts[0] === "validation" && parts[1]) {
              validatorNames.push(parts[1]);
            }
          });

          // =============================================================
          //                                     NORMALISE VALIDATOR NAMES
          // =============================================================

          var validatorNamesToInspect = validatorNames;
          var newValidatorNamesToInspect = [];

          do // repeatedly expand 'shortcut' validators into their real validators
          {
            // Uppercase only the first letter of each name
            $.each(validatorNames, function (i, el) {
              validatorNames[i] = formatValidatorName(el);
            });

            // Remove duplicate validator names
            validatorNames = $.unique(validatorNames);

            // Pull out the new validator names from each shortcut
            newValidatorNamesToInspect = [];
            $.each(validatorNamesToInspect, function(i, el) {
              if ($this.data("validation" + el + "Shortcut") !== undefined) {
                // Are these custom validators?
                // Pull them out!
                $.each($this.data("validation" + el + "Shortcut").split(","), function(i2, el2) {
                  newValidatorNamesToInspect.push(el2);
                });
              } else if (settings.builtInValidators[el.toLowerCase()]) {
                // Is this a recognised built-in?
                // Pull it out!
                var validator = settings.builtInValidators[el.toLowerCase()];
                if (validator.type.toLowerCase() === "shortcut") {
                  $.each(validator.shortcut.split(","), function (i, el) {
                    el = formatValidatorName(el);
                    newValidatorNamesToInspect.push(el);
                    validatorNames.push(el);
                  });
                }
              }
            });

            validatorNamesToInspect = newValidatorNamesToInspect;

          } while (validatorNamesToInspect.length > 0)

          // =============================================================
          //                                       SET UP VALIDATOR ARRAYS
          // =============================================================

          var validators = {};

          $.each(validatorNames, function (i, el) {
            // Set up the 'override' message
            var message = $this.data("validation" + el + "Message");
            var hasOverrideMessage = (message !== undefined);
            var foundValidator = false;
            message =
              (
                message
                  ? message
                  : "'" + el + "' validation failed <!-- Add attribute 'data-validation-" + el.toLowerCase() + "-message' to input to change this message -->"
              )
            ;

            $.each(
              settings.validatorTypes,
              function (validatorType, validatorTemplate) {
                if (validators[validatorType] === undefined) {
                  validators[validatorType] = [];
                }
                if (!foundValidator && $this.data("validation" + el + formatValidatorName(validatorTemplate.name)) !== undefined) {
                  validators[validatorType].push(
                    $.extend(
                      true,
                      {
                        name: formatValidatorName(validatorTemplate.name),
                        message: message
                      },
                      validatorTemplate.init($this, el)
                    )
                  );
                  foundValidator = true;
                }
              }
            );

            if (!foundValidator && settings.builtInValidators[el.toLowerCase()]) {

              var validator = $.extend(true, {}, settings.builtInValidators[el.toLowerCase()]);
              if (hasOverrideMessage) {
                validator.message = message;
              }
              var validatorType = validator.type.toLowerCase();

              if (validatorType === "shortcut") {
                foundValidator = true;
              } else {
                $.each(
                  settings.validatorTypes,
                  function (validatorTemplateType, validatorTemplate) {
                    if (validators[validatorTemplateType] === undefined) {
                      validators[validatorTemplateType] = [];
                    }
                    if (!foundValidator && validatorType === validatorTemplateType.toLowerCase()) {
                      $this.data("validation" + el + formatValidatorName(validatorTemplate.name), validator[validatorTemplate.name.toLowerCase()]);
                      validators[validatorType].push(
                        $.extend(
                          validator,
                          validatorTemplate.init($this, el)
                        )
                      );
                      foundValidator = true;
                    }
                  }
                );
              }
            }

            if (! foundValidator) {
              $.error("Cannot find validation info for '" + el + "'");
            }
          });

          // =============================================================
          //                                         STORE FALLBACK VALUES
          // =============================================================

          $helpBlock.data(
            "original-contents",
            (
              $helpBlock.data("original-contents")
                ? $helpBlock.data("original-contents")
                : $helpBlock.html()
            )
          );

          $helpBlock.data(
            "original-role",
            (
              $helpBlock.data("original-role")
                ? $helpBlock.data("original-role")
                : $helpBlock.attr("role")
            )
          );

          $controlGroup.data(
            "original-classes",
            (
              $controlGroup.data("original-clases")
                ? $controlGroup.data("original-classes")
                : $controlGroup.attr("class")
            )
          );

          $this.data(
            "original-aria-invalid",
            (
              $this.data("original-aria-invalid")
                ? $this.data("original-aria-invalid")
                : $this.attr("aria-invalid")
            )
          );

          // =============================================================
          //                                                    VALIDATION
          // =============================================================

          $this.bind(
            "validation.validation",
            function (event, params) {

              var value = getValue($this);

              // Get a list of the errors to apply
              var errorsFound = [];

              $.each(validators, function (validatorType, validatorTypeArray) {
                if (value || value.length || (params && params.includeEmpty) || (!!settings.validatorTypes[validatorType].blockSubmit && params && !!params.submitting)) {
                  $.each(validatorTypeArray, function (i, validator) {
                    if (settings.validatorTypes[validatorType].validate($this, value, validator)) {
                      errorsFound.push(validator.message);
                    }
                  });
                }
              });

              return errorsFound;
            }
          );

          $this.bind(
            "getValidators.validation",
            function () {
              return validators;
            }
          );

          // =============================================================
          //                                             WATCH FOR CHANGES
          // =============================================================
          $this.bind(
            "submit.validation",
            function () {
              return $this.triggerHandler("change.validation", {submitting: true});
            }
          );
          $this.bind(
            [
              "keyup",
              "focus",
              "blur",
              "click",
              "keydown",
              "keypress",
              "change"
            ].join(".validation ") + ".validation",
            function (e, params) {

              var value = getValue($this);

              var errorsFound = [];

              $controlGroup.find("input,textarea,select").each(function (i, el) {
                var oldCount = errorsFound.length;
                $.each($(el).triggerHandler("validation.validation", params), function (j, message) {
                  errorsFound.push(message);
                });
                if (errorsFound.length > oldCount) {
                  $(el).attr("aria-invalid", "true");
                } else {
                  var original = $this.data("original-aria-invalid");
                  $(el).attr("aria-invalid", (original !== undefined ? original : false));
                }
              });

              $form.find("input,select,textarea").not($this).not("[name=\"" + $this.attr("name") + "\"]").trigger("validationLostFocus.validation");

              errorsFound = $.unique(errorsFound.sort());

              // Were there any errors?
              if (errorsFound.length) {
                // Better flag it up as a warning.
                $controlGroup.removeClass("success error").addClass("warning");

                // How many errors did we find?
                if (settings.options.semanticallyStrict && errorsFound.length === 1) {
                  // Only one? Being strict? Just output it.
                  $helpBlock.html(errorsFound[0] + 
                    ( settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : "" ));
                } else {
                  // Multiple? Being sloppy? Glue them together into an UL.
                  $helpBlock.html("<ul class=\"list-unstyled alert alert-warning\" role=\"alert\"><li>" + errorsFound.join("</li><li>") + "</li></ul>" +
                    ( settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : "" ));
                }
              } else {
                $controlGroup.removeClass("warning error success");
                if (value.length > 0) {
                  $controlGroup.addClass("success");
                }
                $helpBlock.html($helpBlock.data("original-contents"));
              }

              if (e.type === "blur") {
                $controlGroup.removeClass("success");
              }
            }
          );
          $this.bind("validationLostFocus.validation", function () {
            $controlGroup.removeClass("success");
          });
        });
      },
      destroy : function( ) {

        return this.each(
          function() {

            var
              $this = $(this),
              $controlGroup = $this.parents(".form-group, .checkbox").first(),
              $helpBlock = $controlGroup.find(".help-block").first();

            // remove our events
            $this.unbind('.validation'); // events are namespaced.
            // reset help text
            $helpBlock.html($helpBlock.data("original-contents"));
            // reset classes
            $controlGroup.attr("class", $controlGroup.data("original-classes"));
            // reset aria
            $this.attr("aria-invalid", $this.data("original-aria-invalid"));
            // reset role
            $helpBlock.attr("role", $this.data("original-role"));
						// remove all elements we created
						if (createdElements.indexOf($helpBlock[0]) > -1) {
							$helpBlock.remove();
						}

          }
        );

      },
      collectErrors : function(includeEmpty) {

        var errorMessages = {};
        this.each(function (i, el) {
          var $el = $(el);
          var name = $el.attr("name");
          var errors = $el.triggerHandler("validation.validation", {includeEmpty: true});
          errorMessages[name] = $.extend(true, errors, errorMessages[name]);
        });

        $.each(errorMessages, function (i, el) {
          if (el.length === 0) {
            delete errorMessages[i];
          }
        });

        return errorMessages;

      },
      hasErrors: function() {

        var errorMessages = [];

        this.each(function (i, el) {
          errorMessages = errorMessages.concat(
            $(el).triggerHandler("getValidators.validation") ? $(el).triggerHandler("validation.validation", {submitting: true}) : []
          );
        });

        return (errorMessages.length > 0);
      },
      override : function (newDefaults) {
        defaults = $.extend(true, defaults, newDefaults);
      }
    },
		validatorTypes: {
      callback: {
        name: "callback",
        init: function ($this, name) {
          return {
            validatorName: name,
            callback: $this.data("validation" + name + "Callback"),
            lastValue: $this.val(),
            lastValid: true,
            lastFinished: true
          };
        },
        validate: function ($this, value, validator) {
          if (validator.lastValue === value && validator.lastFinished) {
            return !validator.lastValid;
          }

          if (validator.lastFinished === true)
          {
            validator.lastValue = value;
            validator.lastValid = true;
            validator.lastFinished = false;

            var rrjqbvValidator = validator;
            var rrjqbvThis = $this;
            executeFunctionByName(
              validator.callback,
              window,
              $this,
              value,
              function (data) {
                if (rrjqbvValidator.lastValue === data.value) {
                  rrjqbvValidator.lastValid = data.valid;
                  if (data.message) {
                    rrjqbvValidator.message = data.message;
                  }
                  rrjqbvValidator.lastFinished = true;
                  rrjqbvThis.data("validation" + rrjqbvValidator.validatorName + "Message", rrjqbvValidator.message);
                  // Timeout is set to avoid problems with the events being considered 'already fired'
                  setTimeout(function () {
                    rrjqbvThis.trigger("change.validation");
                  }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
                }
              }
            );
          }

          return false;

        }
      },
      ajax: {
        name: "ajax",
        init: function ($this, name) {
          return {
            validatorName: name,
            url: $this.data("validation" + name + "Ajax"),
            lastValue: $this.val(),
            lastValid: true,
            lastFinished: true
          };
        },
        validate: function ($this, value, validator) {
          if (""+validator.lastValue === ""+value && validator.lastFinished === true) {
            return validator.lastValid === false;
          }

          if (validator.lastFinished === true)
          {
            validator.lastValue = value;
            validator.lastValid = true;
            validator.lastFinished = false;
            $.ajax({
              url: validator.url,
              data: "value=" + value + "&field=" + $this.attr("name"),
              dataType: "json",
              success: function (data) {
                if (""+validator.lastValue === ""+data.value) {
                  validator.lastValid = !!(data.valid);
                  if (data.message) {
                    validator.message = data.message;
                  }
                  validator.lastFinished = true;
                  $this.data("validation" + validator.validatorName + "Message", validator.message);
                  // Timeout is set to avoid problems with the events being considered 'already fired'
                  setTimeout(function () {
                    $this.trigger("change.validation");
                  }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
                }
              },
              failure: function () {
                validator.lastValid = true;
                validator.message = "ajax call failed";
                validator.lastFinished = true;
                $this.data("validation" + validator.validatorName + "Message", validator.message);
                // Timeout is set to avoid problems with the events being considered 'already fired'
                setTimeout(function () {
                  $this.trigger("change.validation");
                }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
              }
            });
          }

          return false;

        }
      },
			regex: {
				name: "regex",
				init: function ($this, name) {
					return {regex: regexFromString($this.data("validation" + name + "Regex"))};
				},
				validate: function ($this, value, validator) {
					return (!validator.regex.test(value) && ! validator.negative)
						|| (validator.regex.test(value) && validator.negative);
				}
			},
			required: {
				name: "required",
				init: function ($this, name) {
					return {};
				},
				validate: function ($this, value, validator) {
					return !!(value.length === 0  && ! validator.negative)
						|| !!(value.length > 0 && validator.negative);
				},
        blockSubmit: true
			},
			match: {
				name: "match",
				init: function ($this, name) {
					var element = $this.parents("form").first().find("[name=\"" + $this.data("validation" + name + "Match") + "\"]").first();
					element.bind("validation.validation", function () {
						$this.trigger("change.validation", {submitting: true});
					});
					return {"element": element};
				},
				validate: function ($this, value, validator) {
					return (value !== validator.element.val() && ! validator.negative)
						|| (value === validator.element.val() && validator.negative);
				},
        blockSubmit: true
			},
			max: {
				name: "max",
				init: function ($this, name) {
					return {max: $this.data("validation" + name + "Max")};
				},
				validate: function ($this, value, validator) {
					return (parseFloat(value, 10) > parseFloat(validator.max, 10) && ! validator.negative)
						|| (parseFloat(value, 10) <= parseFloat(validator.max, 10) && validator.negative);
				}
			},
			min: {
				name: "min",
				init: function ($this, name) {
					return {min: $this.data("validation" + name + "Min")};
				},
				validate: function ($this, value, validator) {
					return (parseFloat(value) < parseFloat(validator.min) && ! validator.negative)
						|| (parseFloat(value) >= parseFloat(validator.min) && validator.negative);
				}
			},
			maxlength: {
				name: "maxlength",
				init: function ($this, name) {
					return {maxlength: $this.data("validation" + name + "Maxlength")};
				},
				validate: function ($this, value, validator) {
					return ((value.length > validator.maxlength) && ! validator.negative)
						|| ((value.length <= validator.maxlength) && validator.negative);
				}
			},
			minlength: {
				name: "minlength",
				init: function ($this, name) {
					return {minlength: $this.data("validation" + name + "Minlength")};
				},
				validate: function ($this, value, validator) {
					return ((value.length < validator.minlength) && ! validator.negative)
						|| ((value.length >= validator.minlength) && validator.negative);
				}
			},
			maxchecked: {
				name: "maxchecked",
				init: function ($this, name) {
					var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
					elements.bind("click.validation", function () {
						$this.trigger("change.validation", {includeEmpty: true});
					});
					return {maxchecked: $this.data("validation" + name + "Maxchecked"), elements: elements};
				},
				validate: function ($this, value, validator) {
					return (validator.elements.filter(":checked").length > validator.maxchecked && ! validator.negative)
						|| (validator.elements.filter(":checked").length <= validator.maxchecked && validator.negative);
				},
        blockSubmit: true
			},
			minchecked: {
				name: "minchecked",
				init: function ($this, name) {
					var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
					elements.bind("click.validation", function () {
						$this.trigger("change.validation", {includeEmpty: true});
					});
					return {minchecked: $this.data("validation" + name + "Minchecked"), elements: elements};
				},
				validate: function ($this, value, validator) {
					return (validator.elements.filter(":checked").length < validator.minchecked && ! validator.negative)
						|| (validator.elements.filter(":checked").length >= validator.minchecked && validator.negative);
				},
        blockSubmit: true
			}
		},
		builtInValidators: {
			email: {
				name: "Email",
				type: "shortcut",
				shortcut: "validemail"
			},
			validemail: {
				name: "Validemail",
				type: "regex",
				regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\.[A-Za-z]{2,10}",
				message: "Not a valid email address<!-- data-validator-validemail-message to override -->"
			},
			passwordagain: {
				name: "Passwordagain",
				type: "match",
				match: "password",
				message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->"
			},
			positive: {
				name: "Positive",
				type: "shortcut",
				shortcut: "number,positivenumber"
			},
			negative: {
				name: "Negative",
				type: "shortcut",
				shortcut: "number,negativenumber"
			},
			number: {
				name: "Number",
				type: "regex",
				regex: "([+-]?\\\d+(\\\.\\\d*)?([eE][+-]?[0-9]+)?)?",
				message: "Must be a number<!-- data-validator-number-message to override -->"
			},
			integer: {
				name: "Integer",
				type: "regex",
				regex: "[+-]?\\\d+",
				message: "No decimal places allowed<!-- data-validator-integer-message to override -->"
			},
			positivenumber: {
				name: "Positivenumber",
				type: "min",
				min: 0,
				message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->"
			},
			negativenumber: {
				name: "Negativenumber",
				type: "max",
				max: 0,
				message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->"
			},
			required: {
				name: "Required",
				type: "required",
				message: "This is required<!-- data-validator-required-message to override -->"
			},
			checkone: {
				name: "Checkone",
				type: "minchecked",
				minchecked: 1,
				message: "Check at least one option<!-- data-validation-checkone-message to override -->"
			}
		}
	};

	var formatValidatorName = function (name) {
		return name
			.toLowerCase()
			.replace(
				/(^|\s)([a-z])/g ,
				function(m,p1,p2) {
					return p1+p2.toUpperCase();
				}
			)
		;
	};

	var getValue = function ($this) {
		// Extract the value we're talking about
		var value = $this.val();
		var type = $this.attr("type");
		if (type === "checkbox") {
			value = ($this.is(":checked") ? value : "");
		}
		if (type === "radio") {
			value = ($('input[name="' + $this.attr("name") + '"]:checked').length > 0 ? value : "");
		}
		return value;
	};

  function regexFromString(inputstring) {
		return new RegExp("^" + inputstring + "$");
	}

  /**
   * Thanks to Jason Bunting via StackOverflow.com
   *
   * http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string#answer-359910
   * Short link: http://tinyurl.com/executeFunctionByName
  **/
  function executeFunctionByName(functionName, context /*, args*/) {
    var args = Array.prototype.slice.call(arguments).splice(2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(this, args);
  }

	$.fn.jqBootstrapValidation = function( method ) {

		if ( defaults.methods[method] ) {
			return defaults.methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return defaults.methods.init.apply( this, arguments );
		} else {
		$.error( 'Method ' +  method + ' does not exist on jQuery.jqBootstrapValidation' );
			return null;
		}

	};

  $.jqBootstrapValidation = function (options) {
    $(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments);
  };

})( jQuery );
>>>>>>> a4655f5 (first commit)
