/** @jest-environment jsdom */
const { addElementToDOM, removeElementFromDOM, simulateClick, handleFormSubmit } = require('../index.js')

beforeEach(() => {
    document.body.innerHTML = 
    `
    <div id="dynamic-content"></div>
    <form id="user-form">
    <input type="text" id="user-input" />
    </form>
    <div id="error-message" class="hidden"></div>
    <div id="test-element">Remove me</div>
    `
})

describe("Add Element To Dom", () => {
    test("adds an element to the DOM when invoked", () => {
        const container = document.getElementById("dynamic-content")
        addElementToDOM("dynamic-content", "Hello")
        expect(container.innerHTML).toBe("Hello")
    })
})

describe("Remove Element from DOM", () => {
    test("removes an element from DOM when invoked", () => {
        removeElementFromDOM("test-element")
        expect(document.getElementById("test-element")).toBeNull()
    })
})

describe("Simulate Element To Dom", () => {
    test("simulates an element to the DOM when invoked", () => {
        const container = document.getElementById("dynamic-content")
        simulateClick("dynamic-content", "Button clicked!")
        expect(container.innerHTML).toBe("Button clicked!")
    })
})

describe("Handle Form Submitted", () => {
    test("handles form that is submitted when invoked", () => {
        document.getElementById("user-input").value = "Hello"
        handleFormSubmit("user-form", "dynamic-content")
        expect(document.getElementById("dynamic-content").innerHTML).toBe("Hello")

    })

    test("handles form that is submitted when invoked", () => {
        document.getElementById("user-input").value = ""
        handleFormSubmit("user-form", "dynamic-content")
        expect(document.getElementById("error-message").innerHTML).toBe("Input cannot be empty")

    })
})

