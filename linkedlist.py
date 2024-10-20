from __future__ import annotations
from typing import Iterable, Iterator, List, Optional
from datastructures.ilinkedlist import ILinkedList, ListNode, T


class LinkedList(ILinkedList[T]):
    def __init__(self, items: Iterable[T] = []) -> None:
        raise NotImplementedError('LinkedList.__init__')

    def append(self, item: T) -> None:
        raise NotImplementedError('LinkedList.append')

    def prepend(self, item: T) -> None:
        raise NotImplementedError('LinkedList.prepend')

    def insert_at(self, item: T, index: int) -> None:
        raise NotImplementedError('LinkedList.insert_at')

    def pop_back(self) -> T:
        raise NotImplementedError('LinkedList.pop_back')

    def pop_front(self) -> T:
        raise NotImplementedError('LinkedList.pop_front')

    def pop_at(self, index: int) -> T:
        raise NotImplementedError('LinkedList.pop_at')

    def clear(self) -> None:
        raise NotImplementedError('LinkedList.clear')

    def is_empty(self) -> bool:
        raise NotImplementedError('LinkedList.is_empty')

    def front(self) -> T:
        raise NotImplementedError('LinkedList.front')

    def back(self) -> T:
        raise NotImplementedError('LinkedList.back')

    def to_list(self) -> List[T]:
        raise NotImplementedError('LinkedList.to_list')

    def __getitem__(self, index: int) -> T:
        raise NotImplementedError('LinkedList.__getitem__')

    def __setitem__(self, index: int, item: T) -> None:
        raise NotImplementedError('LinkedList.__setitem__')

    def __delitem__(self, index: int) -> None:
        raise NotImplementedError('LinkedList.__delitem__')

    def __contains__(self, item: T) -> bool:
        raise NotImplementedError('LinkedList.__contains__')
    
    def __eq__(self, other: object) -> bool:
        raise NotImplementedError('LinkedList.__eq__')

    def __iter__(self) -> Iterator[T]:
        raise NotImplementedError('LinkedList.__iter__')

    def __next__(self) -> T:
        raise NotImplementedError('LinkedList.__next__')

    def __len__(self) -> int:
        raise NotImplementedError('LinkedList.__len__')

    def __str__(self) -> str:
        raise NotImplementedError('LinkedList.__str__')

    def __repr__(self) -> str:
        raise NotImplementedError('LinkedList.__repr__')