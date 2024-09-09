const template = document.createElement('template')
template.innerHTML = `
    <style>
        .tile {
            height: 100px;
            width: 100px;
            border-radius: 2px;
            background-color: #eb4034;
            border: 5px solid #000;
        }

        p {
            text-align: center;
            color: #fff;
            font-size: 32px;
            font-weight: bold;
        }
    </style>
    <div class="tile">
        <p>Tile</p>
    </div>
`

export { template }
