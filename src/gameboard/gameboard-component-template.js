const template = document.createElement('template')
template.innerHTML = `
    <style>
        .gameboard {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            width: 330px;
            background-color: #f3f3f3;
            border-radius: 2px;
        }
    </style>
    <div class="gameboard">
        
    </div>
`

export { template }
