from datastructures.stack import LLStack

import pytest

class TestLLStack():
    @pytest.fixture
    def empty_stack(self) -> LLStack: return LLStack()
    
    @pytest.fixture
    def stack(self) -> LLStack:
        stack = LLStack[int]()
        for i in range(1, 4): stack.push(i)
        return stack
    
    def test_push(self, empty_stack: LLStack) -> None:
        empty_stack.push(1)
        empty_stack.push(2)
        empty_stack.push(3)
        assert empty_stack.size() == 3
        assert empty_stack.peek() == 3
    
    def test_pop(self, stack: LLStack) -> None:
        assert stack.pop() == 3
        assert stack.pop() == 2
        assert stack.pop() == 1
        assert stack.size() == 0
    
    def test_peek(self, stack: LLStack) -> None:
        assert stack.peek() == 3
        assert stack.size() == 3
    
    def test_size(self, stack: LLStack) -> None:
        assert stack.size() == 3
    
    def test_is_empty(self, empty_stack: LLStack) -> None:
        assert empty_stack.is_empty()
        empty_stack.push(1)
        assert not empty_stack.is_empty()
    
    def test_clear(self, stack: LLStack) -> None:
        stack.clear()
        assert stack.size() == 0
        assert stack.is_empty()
    
    def test_contains(self, stack: LLStack) -> None:
        assert 1 in stack
        assert 2 in stack
        assert 3 in stack
        assert 4 not in stack
    
    def test_eq(self, stack: LLStack) -> None:
        stack2 = LLStack[int]()
        for i in range(1, 4): stack2.push(i)
        assert stack == stack2
        stack2.pop()
        assert stack != stack2