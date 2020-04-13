/*!@license
* Infragistics.Web.ClientUI templating localization resources 19.2.53
*
* Copyright (c) 2011-2020 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.en=$.ig.locale.en||{};$.ig.Templating=$.ig.Templating||{};$.ig.locale.en.Templating={undefinedArgument:"An error has occurred while trying to retrieve data source property: "};$.ig.Templating.locale=$.ig.Templating.locale||$.ig.locale.en.Templating;return $.ig.locale.en.Templating});/*!@license
 * Infragistics.Web.ClientUI Templating Engine 19.2.53
 *
 * Copyright (c) 2011-2020 Infragistics Inc.
 *
 * Engine used for data templating
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *	jquery-1.9.1.js
 *  infragistics.util.jquery.js
 */
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery","./infragistics.util","./infragistics.util.jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};$.extend($.ig,{tmpl:function(template,data,args){var tmpl=template,cacheConst;if(tmpl){tmpl=tmpl.replace(this.regExp.lineBreak,"");tmpl=tmpl.replace(this.regExp.comment,"");if(typeof data==="function"){if(args){data=data.apply(this,args)}else{data=data.call()}}if(this._internalTmplCache&&this._internalTmplCache.hasOwnProperty(tmpl)){this.tokens=this._internalTmplCache[tmpl].tokens;this.args=this._internalTmplCache[tmpl].args;this.i=this._internalTmplCache[tmpl].i;this._hasBlock=this._internalTmplCache[tmpl]._hasBlock;tmpl=this._internalTmplCache[tmpl].tmpl}else{this.tokens=[];this.args=[];this.i=0;this._tokenizeTemplate(tmpl);cacheConst=tmpl;this._internalTmplCache[cacheConst]={};this._internalTmplCache[cacheConst].tokens=this.tokens;if(this.regExp.block.test(tmpl)){this._hasBlock=true;tmpl=this._tokenizeDirectives(tmpl)}else{this._hasBlock=false}this._internalTmplCache[cacheConst].args=this.args;this._internalTmplCache[cacheConst].i=this.i;this._internalTmplCache[cacheConst]._hasBlock=this._hasBlock;this._internalTmplCache[cacheConst].tmpl=tmpl}if(!this.tokens.length){return tmpl}if(this._hasBlock){tmpl=this._compileTemplate(tmpl,data)}else{tmpl=this._populateTemplate(tmpl,data)}delete this.args;delete this.tokens;delete this._hasBlock;delete this.i}return tmpl},clearTmplCache:function(){delete this._internalTmplCache;this._internalTmplCache={}},regExp:{comment:/\s#[^#]*#/g,sub:/\$\{(([\w\$\-]+(\.|\s)?[\w\$\-]*)+)\}/,nonEncodeSub:/\{\{html\s+([\w\$\-]+(\.|\s)?[\w\$\-]*)+\}\}/,forSub:/\$\{(([\w\$]+\.[\w\$]*)+)\}/,arg:/args\[\d+\](?!.*\+)/,block:/\{\{(\w+).*?\}\}+(.*)(\{\{\/\1\}\})/,blockCont:/\{\{(?!\/)(\S+)(.*)\}\}(.*)/,blockDirective:/\{\{\S+.*?\}\}/,index:/\$i/g,lineBreak:/(\r\n|\n|\r)/gm,lt:/</g,gt:/>/g,ap:/'/g,ic:/"/g,amp:/&/g},_directives:{"if":{start:"if (",close:") {",end:" }"},elseif:{start:" } else if (",close:") {",end:""},"else":{start:" } else {",close:"",end:""},each:{start:"for (var i = 0; i < $data.length; i++) {",close:"",end:" }"}},_internalTmplCache:{},_tokenizeTemplate:function(template){var tempToken,splitName;if(this.regExp.sub.test(template)){tempToken=this.regExp.sub.exec(template);while(tempToken!==null){splitName=tempToken[1].split(".");template=template.replace(new RegExp("\\$\\{"+tempToken[1].replace(/\$/g,"\\$")+"\\}","g"),"");tempToken[3]=new RegExp("\\$\\{"+tempToken[1].replace(/\$/g,"\\$")+"\\}","g");tempToken[1]=splitName;tempToken[2]=true;this.tokens.push(tempToken);tempToken=this.regExp.sub.exec(template)}}if(this.regExp.nonEncodeSub.test(template)){tempToken=this.regExp.nonEncodeSub.exec(template);while(tempToken!==null){splitName=tempToken[1].split(".");template=template.replace(new RegExp("\\{\\{html\\s+"+tempToken[1].replace(/\$/g,"\\$")+"\\}\\}","g"),"");tempToken[3]=new RegExp("\\{\\{html\\s+"+tempToken[1].replace(/\$/g,"\\$")+"\\}\\}","g");tempToken[1]=splitName;tempToken[2]=false;this.tokens.push(tempToken);tempToken=this.regExp.nonEncodeSub.exec(template)}}},_tokenizeDirectives:function(template){var tmpl='var result = "";',tokens=this.regExp.block.exec(template),temp;if(template.indexOf(tokens[0])>0||template.length!==tokens[0].length){temp=template.split(tokens[0]);if(temp[0]&&temp[0].length>0){this.args.push(temp[0]);tmpl+="result += args["+this.i++ +"];"}}tmpl+=this._handleCompleteBlock(tokens);if(temp&&temp.length>0&&temp[1].length>0){this.args.push(temp[1]);tmpl+="result += args["+this.i++ +"];"}tmpl+="return result;";return tmpl},_handleCompleteBlock:function(tokens){var tmpl=tokens[0],template="",blocks=[],i,temp;tmpl=tmpl.replace("{{"+tokens[1],this._directives[tokens[1]].start);if(tokens[1]==="each"){blocks.push(tokens[0].split(tokens[3]));blocks.push(tokens[2].split(tokens[3]));for(i=0;i<blocks[1].length;i++){if(blocks[0][i].indexOf("{{each")>0){temp=blocks[0][i].split("{{each")[0];this.args.push(temp);template+="result += args["+this.i++ +"];";blocks[0][i]=blocks[0][i].substr(blocks[0][i].indexOf("{{each"));temp=this.regExp.blockDirective.exec(blocks[1][i]);blocks[1][i]=blocks[1][i].substr(blocks[1][i].indexOf(temp[0])+temp[0].length)}blocks[0][i]=blocks[0][i].replace("{{"+tokens[1],this._directives[tokens[1]].start);template+=this._handleEach(blocks[0][i]+"{{/each}}",[blocks[0][i]+"{{/each}}","each",blocks[1][i],"{{/each}}"])}}else if(tokens[1]==="if"){template+=this._handleIfElse(tmpl,tokens)}return template},_handleEach:function(template,tokens){var tmpl=template,eachVar,body,forSub,sub,expr;eachVar=this.regExp.sub.exec(tmpl);tmpl=tmpl.replace(eachVar[0],"");tmpl=tmpl.replace("$data",eachVar[0]);body=tokens[2];if(/\$data/.test(body)){body=body.replace(/\$data/g,'" + '+eachVar[0]+'[ i ] + "');this.args.push(eachVar[0]);this.i++}forSub=this.regExp.forSub.exec(body);while(forSub){body=body.replace(new RegExp("\\$\\{"+forSub[1]+"\\}","g"),'" + '+eachVar[0]+"[ i ]"+forSub[1].substr(forSub[1].indexOf("."))+' + "');forSub=this.regExp.forSub.exec(body)}body=body.replace(/\$index/g,'" + i + "');tmpl=tmpl.replace(tokens[2],'result += "'+body+'"');tmpl=tmpl.replace(/\}\}/,this._directives[tokens[1]].close);tmpl=tmpl.replace(tokens[3],this._directives[tokens[1]].end);sub=this.regExp.sub.exec(tmpl);while(sub){expr=new RegExp("\\$\\{"+sub[1]+"\\}","g");tmpl=tmpl.replace(expr,"args["+this.i++ +"]");this.args.push(sub[0]);sub=this.regExp.sub.exec(tmpl)}return tmpl},_handleIfElse:function(template,tokens){var tmpl=template,i=0,htmlStrings,sub,inner,index,tmplArr=[];tmpl=tmpl.replace(/\}\}/,this._directives[tokens[1]].close);index=tmpl.lastIndexOf(tokens[3]);tmpl=tmpl.substr(0,index)+tmpl.slice(index+tokens[3].length-1);if(this.regExp.block.test(tmpl)){inner=this.regExp.block.exec(tmpl);tmpl=tmpl.replace(inner[0],this._handleCompleteBlock(inner))}htmlStrings=tokens[2].split(this.regExp.blockDirective);tmplArr.push(tmpl.slice(0,tmpl.indexOf(") {")+3));tmplArr.push(tmpl.slice(tmpl.indexOf(") {")+3));for(i;i<htmlStrings.length;i++){if(htmlStrings[i]&&htmlStrings[i].length&&htmlStrings[i].length>0){tmplArr[1]=tmplArr[1].replace(htmlStrings[i],"result += args["+this.i++ +"];");this.args.push(htmlStrings[i])}}tmpl=tmplArr.join("");tokens=this.regExp.blockCont.exec(tmpl);while(tokens){tmpl=tmpl.replace("{{"+tokens[1],this._directives[tokens[1]].start);tmpl=tmpl.replace(/\}\}/,this._directives[tokens[1]].close);tokens=this.regExp.blockCont.exec(tmpl)}sub=this.regExp.sub.exec(tmpl);while(sub){tmpl=tmpl.replace(new RegExp("\\$\\{"+sub[1]+"\\}","g"),"args["+this.i++ +"]");this.args.push(sub[0]);sub=this.regExp.sub.exec(tmpl)}return tmpl},_populateTemplate:function(template,data){var i,j,result="",temp;if($.type(data)!=="array"){for(i=0;i<this.tokens.length;i++){template=this._populateArgumentValue(data,this.tokens[i],template)}result=template}else{for(j=0;j<data.length;j++){temp=template;for(i=0;i<this.tokens.length;i++){temp=this._populateArgumentValue(data[j],this.tokens[i],temp)}temp=temp.replace(this.regExp.index,j);result+=temp}}return result},_getUndefinedArgLocale:function(){return $.ig.util?$.ig.util.getLocaleValue("Templating","undefinedArgument"):$.ig.Templating.locale.undefinedArgument},_compileTemplate:function(template,data){var i,j,k,result="",temp,tempArgs=[],arg="",f;if($.type(data)!=="array"){for(j=0;j<this.args.length;j++){arg=this.args[j];for(i=0;i<this.tokens.length;i++){if(arg===this.tokens[i][0]){arg=this._getArgumentValue(data,this.tokens[i],arg);break}else if(typeof arg==="string"){arg=this._populateArgumentValue(data,this.tokens[i],arg)}}if(arg===undefined){throw new Error(this._getUndefinedArgLocale()+this.tokens[i][0])}if(typeof arg==="string"){arg=arg.replace(this.regExp.index,0)}tempArgs.push(arg)}template=template.replace(/\$i/g,0);result=new Function("args",template).call(this,tempArgs)||""}else{temp=template.replace(this.regExp.index,"args["+this.args.length+"]");f=new Function("args",temp);for(j=0;j<data.length;j++){tempArgs=[];for(k=0;k<this.args.length;k++){arg=this.args[k];for(i=0;i<this.tokens.length;i++){if(arg===this.tokens[i][0]){arg=this._getArgumentValue(data[j],this.tokens[i],arg);break}else if(typeof arg==="string"){arg=this._populateArgumentValue(data[j],this.tokens[i],arg)}}if(arg===undefined){throw new Error(this._getUndefinedArgLocale()+this.tokens[i][0])}if(typeof arg==="string"){arg=arg.replace(this.regExp.index,j)}tempArgs.push(arg)}tempArgs.push(j);result+=f.call(this,tempArgs)||""}}return result},_getArgumentValue:function(data,token,arg){var tempData,l;if(token[1].length&&token[1].length>1){tempData=data;for(l=0;l<token[1].length;l++){if(tempData&&tempData.hasOwnProperty(token[1][l])){tempData=tempData[token[1][l]]}else{tempData="";break}}if(token[2]&&typeof tempData==="string"){arg=this.encode(tempData)}else{arg=tempData}}else{if(token[2]&&typeof data[token[1]]==="string"){arg=this.encode(data[token[1]])}else{arg=data[token[1]]}}return arg},_populateArgumentValue:function(data,token,arg){var tempData,l,self=this;if(token[1].length&&token[1].length>1){tempData=data;for(l=0;l<token[1].length;l++){if(tempData&&tempData.hasOwnProperty(token[1][l])){tempData=typeof tempData[token[1][l]]==="function"?tempData[token[1][l]]():tempData[token[1][l]]}else{tempData="";break}}if(token[2]&&typeof tempData==="string"){arg=arg.replace(token[3],function(){return self.encode(tempData)})}else{arg=arg.replace(token[3],function(){return tempData===null?"":tempData})}}else{if(token[2]){arg=arg.replace(token[3],function(){return self.encode(typeof data[token[1]]==="function"?data[token[1]]():data[token[1]])})}else{arg=arg.replace(token[3],function(){return data[token[1]]===null?"":typeof data[token[1]]==="function"?data[token[1]]():data[token[1]]})}}return arg}})});