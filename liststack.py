import os
from datastructures.istack import IStack
from typing import Generic

from datastructures.linkedlist import LinkedList

class ListStack[T](Generic[T], IStack[T]):
    def __init__(self, data_type) -> None:
        raise NotImplementedError("ListStack.__init__ is not implemented.")

    def push(self, item: T):
        raise NotImplementedError("ListStack.push is not implemented.")

    def pop(self) -> T:
        raise NotImplementedError("ListStack.pop is not implemented.")

    def peek(self) -> T:
        raise NotImplementedError("ListStack.peek is not implemented.")

    @property
    def empty(self) -> bool:
        raise NotImplementedError("ListStack.empty is not implemented.")

    def clear(self):
        raise NotImplementedError("ListStack.clear is not implemented.")

    def __contains__(self, item: T) -> bool:
        raise NotImplementedError("ListStack.__contains__ is not implemented.")

    def __eq__(self, other) -> bool:
        raise NotImplementedError("ListStack.__eq__ is not implemented.")

    def __len__(self) -> int:
        raise NotImplementedError("ListStack.__len__ is not implemented.")

    def __str__(self) -> str:
        raise NotImplementedError("ListStack.__str__ is not implemented.")

    def __repr__(self) -> str:
        raise NotImplementedError("ListStack.__repr__ is not implemented.")
    

if __name__ == '__main__':
    filename = os.path.basename(__file__)
    print(f'OOPS!\nThis is the {filename} file.\nDid you mean to run your tests or program.py file?\nFor tests, run them from the Test Explorer on the left.')
