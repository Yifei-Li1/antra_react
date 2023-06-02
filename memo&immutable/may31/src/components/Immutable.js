import React from 'react';
class Immutable extends React.Component{
    state = {
        "id": "001",
        "type": "A",
        "value": "aaaaa",
        "data:": {},
        "path": ["001"],
        "children": [
            {
                "id": "003",
                "type": "A",
                "value": "aaaaa",
                "data:": {},
                "path": ["001", "003"],
                "children": [
                    {
                        "id": "002",
                        "type": "A",
                        "value": "aaaaa",
                        "data:": {},
                        "path": ["001", "003", "002"],
                        "children": []
                    },
                ]
            },
            {
                "id": "004",
                "type": "A",
                "value": "aaaaa",
                "data:": {},
                "path": ["001", "004"],
                "children": [
                    {
                        "id": "005",
                        "type": "A",
                        "value": "aaaaa",
                        "data:": {},
                        "path": ["001", "004", "005"],
                        "children": []
                    },{
                        "id": "005",
                        "type": "A",
                        "value": "aaaaa",
                        "data:": {},
                        "path": ["001", "004", "005"],
                        "children": [
                            {
                                "id": "002",
                                "type": "A",
                                "value": "aaaaa",
                                "data:": {},
                                "path": ["001", "004", "005", "002"],
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
    handleChange = ()=>{
        this.setState(prev=>{
            const nextState = {
                ...prev,
                children:
                [{
                    ...prev.children[0],
                    children:[{...prev.children[0].children[0],
                        path:[prev.children[0].children[0].path[0],"004",prev.children[0].children[0].path[2]]
                    },...prev.children[0].children.slice(1)]
                },...prev.children.slice(1)]
            }
            return nextState;
        });
        this.setState(prev=>{
            const nextState={
                ...prev,
                children:[prev.children[0],{
                    ...prev.children[1],
                    children:[prev.children[1].children[0],{
                        ...prev.children[1].children[1],
                        children:[{
                            ...prev.children[1].children[1].children[0],
                            path:[...prev.children[1].children[1].children[0].path.slice(0,2),"006",...prev.children[1].children[1].children[0].path.slice(3)]
                        },...prev.children[1].children[1].children.slice(1)]
                    },prev.children[1].children.slice(2)]
                },prev.children.slice(2)]
            }
            return nextState
        })



    }
    render(){
        return(<>
        <p>Immutable Part:</p>
        <p>{this.state.children[0].children[0].path}</p>
        <p>{this.state.children[1].children[1].children[0].path}</p>
        <button onClick={this.handleChange}>change</button>
        
        </>)
        
    }
}
export default Immutable;