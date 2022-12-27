import plugin from '../plugin.json';
import style from './style.scss';
import tag from 'html-tag-js';

class TailwindColorPalette {
    
    async init($page) {
        let command = {
            name: "Tailwind Palette",
            description: "Tailwind Color Palette",
            exec: this.run.bind(this),
        }
        editorManager.editor.commands.addCommand(command);
        $page.id = 'acode-plugin-tailwind-color-palette';
        $page.settitle("Tailwind Color Palette");
        this.$page = $page;
        this.$colorsArr = [];
        this.load_colors();
        this.$style = tag('style', {
            textContent: style,
        });
        this.$outputDiv = tag('div',{
            className: 'outputDiv',
        });
        this.$inputCont = tag('div',{
            className: 'inputCont',
        });
        this.$insertBtn = tag('button',{
            textContent: 'Use this color',
        });
        this.$page.append(this.$outputDiv);
        this.$page.append(this.$inputCont);
        this.$page.append(this.$insertBtn);
        this.$searchBar = tag('input',{
            type: "text",
            className: "searchBar",
            placeholder: "Enter color class"
        });
        this.colorInp = tag('input',{
            type: 'hidden',
        });
        this.$result = tag('div',{
            className: "result",
        });
        this.$inputCont.append(this.$searchBar);
        this.$inputCont.append(this.colorInp);
        this.$inputCont.append(this.$result);
        this.$ul = tag('ul',{
            className: "sug_ul",
        });
        this.$result.append(this.$ul);
        document.head.append(this.$style);
        this.$insertBtn.onclick = this.insert_color.bind(this);
        this.$searchBar.onkeyup = this.show_results.bind(this);
    }
    
    async run(){
        this.$page.show()
    }
    
    async load_colors(){
        try {
            const response = await fetch(this.baseUrl+'colors.json');
            this.$colorsArr = await response.json();
        } catch (e) {
            window.toast(e,5000);
        }
    }
    
    insert_input(input,color){
        this.$searchBar.value = input;
        this.$result.style.display = 'none';
        this.colorInp.value = color;
        this.$outputDiv.style.background = color;
    }
    
    autocompleteMatch(input){
        if (input == '') {
            return [];
        }
        var reg = new RegExp(input);
        let suggestion = this.$colorsArr.filter((item) => {
            return item.className.match(reg);
        });
        return suggestion;
    }
    
    show_results(){
        this.$result.style.display = 'flex';
        this.$ul.innerHTML = '';
        let terms = this.autocompleteMatch(this.$searchBar.value);
        
        terms.forEach(obj => {
            const list = tag('li',{
                textContent: obj.className,
            });
            list.onclick = this.insert_input.bind(this,obj.className,obj.colorCode);
            this.$ul.append(list);
        });
    }
    
    insert_color(){
        editorManager.editor.insert(this.colorInp.value);
        this.$page.hide();
    }
    
    async destroy() {
        let command = {
            name: "Tailwind Palette",
            description: "Tailwind Color Palette",
            exec: this.run.bind(this),
        }
        editorManager.editor.commands.removeCommand(command);
    }
}

if (window.acode) {
    const acodePlugin = new TailwindColorPalette();
    acode.setPluginInit(plugin.id, (baseUrl, $page, {
        cacheFileUrl, cacheFile
    }) => {
        if (!baseUrl.endsWith('/')) {
            baseUrl += '/';
        }
        acodePlugin.baseUrl = baseUrl;
        acodePlugin.init($page, cacheFile, cacheFileUrl);
    });
    acode.setPluginUnmount(plugin.id, () => {
        acodePlugin.destroy();
    });
}