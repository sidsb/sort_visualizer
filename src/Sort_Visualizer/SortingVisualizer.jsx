import React, { Component } from 'react'
import './SortingVisualizer.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { mergeSort as mergeSortAlgo } from '../Algorithms/mergeSort.jsx';
import { heapSort as heapSortAlgo } from '../Algorithms/heapSort.jsx';
import { bubbleSort as bubbleSortAlgo } from '../Algorithms/bubble.jsx';
import { quickSort as quickSortAlgo } from '../Algorithms/quickSort.jsx';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 310;



// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export class SortingVisualizer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            array: [],
            NUMBER_OF_ARRAY_BARS: 310
        }
    }
    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < this.state.NUMBER_OF_ARRAY_BARS; ++i) {
            array.push(genrandom(3, 500));
            //pushing a random number

        }
        this.setState({ array });
    }



    mergeSort() {
        const animations = mergeSortAlgo(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS / this.state.NUMBER_OF_ARRAY_BARS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS / this.state.NUMBER_OF_ARRAY_BARS);
            }
        }
    }

    heapSort() {
        const animations = heapSortAlgo(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4 < 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS / this.state.NUMBER_OF_ARRAY_BARS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS / this.state.NUMBER_OF_ARRAY_BARS);
            }
        }
    }

    quickSort() {
        const animations = quickSortAlgo(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4 < 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS / this.state.NUMBER_OF_ARRAY_BARS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS / this.state.NUMBER_OF_ARRAY_BARS);
            }
        }
    }

    bubbleSort() {
        const animations = bubbleSortAlgo(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4 < 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS / this.state.NUMBER_OF_ARRAY_BARS / 2);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS / this.state.NUMBER_OF_ARRAY_BARS / 2);
            }
        }
    }

    handleChange(e) {
        this.setState({ NUMBER_OF_ARRAY_BARS: e.target.value });
        this.resetArray();
    }

    render() {

        const { array } = this.state;
        return (
            <>
                <div className="breadcrumb">
                    <Button className="btn btn-lg btn-danger" onClick={() => this.resetArray()}>Generate New Array</Button>
                    <div className="btn-group">
                        <Button className="btn btn-lg btn-secondary" onClick={() => this.mergeSort()}>Merge Sort</Button>
                        <Button className="btn btn-lg btn-success" onClick={() => this.heapSort()}>Heap Sort</Button>
                        <Button className="btn btn-lg btn-info" onClick={() => this.quickSort()}>Quick Sort</Button>
                        <Button className="btn btn-lg btn-dark" onClick={() => this.bubbleSort()}>Bubble Sort</Button>
                    </div>
                    <div className="slidecontainer">
                        <p>Change Array size and speed</p>
                        <input type="range" min="10" max="310" value={this.state.NUMBER_OF_ARRAY_BARS} name='val_blur' className="slider" onChange={(e) => { this.handleChange(e) }} />
                    </div>
                </div>
                <div className="array-conatiner">
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                                height: `${value}px`, width: `${620 / this.state.NUMBER_OF_ARRAY_BARS}px`
                            }}>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}

function genrandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer
