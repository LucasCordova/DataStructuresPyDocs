from datastructures.narray_stack import ArrayStack

import pytest

class TestArrayStack():
    @pytest.fixture
    def empty_stack(self) -> ArrayStack: return ArrayStack()

    @pytest.fixture
    def stack(self) -> ArrayStack:
        stack = ArrayStack[int]()
        for i in range(1, 4): stack.push(i)
        return stack
    
    def test_push(self, empty_stack: ArrayStack) -> None:
        empty_stack.push(1)
        empty_stack.push(2)
        empty_stack.push(3)
        assert empty_stack.size() == 3
        assert empty_stack.peek() == 3

    def test_pop(self, stack: ArrayStack) -> None:
        assert stack.pop() == 3
        assert stack.pop() == 2
        assert stack.pop() == 1
        assert stack.size() == 0

    def test_pop_exception(self, empty_stack: ArrayStack) -> None:
        with pytest.raises(IndexError): empty_stack.pop()

    def test_peek(self, stack: ArrayStack) -> None:
        assert stack.peek() == 3
        assert stack.size() == 3

    def test_peek_exception(self, empty_stack: ArrayStack) -> None:
        with pytest.raises(IndexError): empty_stack.peek()
    
    def test_size(self, stack: ArrayStack) -> None:
        assert stack.size() == 3

    def test_is_empty(self, empty_stack: ArrayStack) -> None:
        assert empty_stack.is_empty()
        empty_stack.push(1)
        assert not empty_stack.is_empty()
    
    def test_clear(self, stack: ArrayStack) -> None:
        stack.clear()
        assert stack.size() == 0
        assert stack.is_empty()

    def test_contains(self, stack: ArrayStack) -> None:
        assert 1 in stack
        assert 2 in stack
        assert 3 in stack
        assert 4 not in stack

    def test_eq(self, stack: ArrayStack) -> None:
        stack2 = ArrayStack[int]()
        for i in range(1, 4): stack2.push(i)
        assert stack == stack2
        stack2.pop()
        assert stack != stack2