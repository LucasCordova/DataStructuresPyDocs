import os
import shutil

def copy_get(config, **kwargs):
    site_dir = config['site_dir']
    # shutil.copy('datastructures/iarray.py', os.path.join(site_dir, 'iarray.py'))
    # shutil.copy('datastructures/array.py', os.path.join(site_dir, 'array.py'))
    # shutil.copy('datastructures/test_array.py', os.path.join(site_dir, 'test_array.py'))
    # shutil.copy('datastructures/iavltree.py', os.path.join(site_dir, 'iavltree.py'))
    # shutil.copy('datastructures/test_avltree_inserts.py', os.path.join(site_dir, 'test_avltree_inserts.py'))
    # shutil.copy('datastructures/test_avltree_deletes.py', os.path.join(site_dir, 'test_avltree_deletes.py'))
    # shutil.copy('datastructures/test_avltree_auxiliary.py', os.path.join(site_dir, 'test_avltree_auxiliary.py'))
    # shutil.copy('datastructures/iarray2d.py', os.path.join(site_dir, 'iarray2d.py'))
    # shutil.copy('datastructures/array2d.py', os.path.join(site_dir, 'array2d.py'))
    # shutil.copy('datastructures/test_array2d.py', os.path.join(site_dir, 'test_array2d.py'))
    # shutil.copy('datastructures/car.py', os.path.join(site_dir, 'car.py'))
    # shutil.copy('datastructures/ilinkedlist.py', os.path.join(site_dir, 'ilinkedlist.py'))
    # shutil.copy('datastructures/linkedlist.py', os.path.join(site_dir, 'linkedlist.py'))
    # shutil.copy('datastructures/test_linkedlist.py', os.path.join(site_dir, 'test_linkedlist.py'))

    # shutil.copy('datastructures/istack.py', os.path.join(site_dir, 'istack.py'))
    # shutil.copy('datastructures/stack.py', os.path.join(site_dir, 'stack.py'))
    # shutil.copy('datastructures/test_stack.py', os.path.join(site_dir, 'test_stack.py'))

    # shutil.copy('datastructures/iqueue.py', os.path.join(site_dir, 'iqueue.py'))
    # shutil.copy('datastructures/queue.py', os.path.join(site_dir, 'queue.py'))
    # shutil.copy('datastructures/test_queue.py', os.path.join(site_dir, 'test_queue.py'))

    # shutil.copy('datastructures/ihashmap.py', os.path.join(site_dir, 'ihashmap.py'))
    # shutil.copy('datastructures/hashmap.py', os.path.join(site_dir, 'hashmap.py'))
    # shutil.copy('datastructures/test_hashmap.py', os.path.join(site_dir, 'test_hashmap.py'))

    shutil.copy('src/datastructures/ibag.py', os.path.join(site_dir, 'ibag.py'))
    shutil.copy('src/datastructures/bag.py', os.path.join(site_dir, 'bag.py'))
    shutil.copy('src/tests/test_bag.py', os.path.join(site_dir, 'test_bag.py'))

    shutil.copy('src/datastructures/iarray.py', os.path.join(site_dir, 'iarray.py'))
    shutil.copy('src/datastructures/array.py', os.path.join(site_dir, 'array.py'))
    shutil.copy('src/tests/test_array.py', os.path.join(site_dir, 'test_array.py'))
    shutil.copy('src/tests/car.py', os.path.join(site_dir, 'car.py'))

    shutil.copy('src/datastructures/iarray2d.py', os.path.join(site_dir, 'iarray2d.py'))
    shutil.copy('src/datastructures/array2d.py', os.path.join(site_dir, 'array2d.py'))
    shutil.copy('src/tests/test_array2d.py', os.path.join(site_dir, 'test_array2d.py'))

    shutil.copy('src/datastructures/istack.py', os.path.join(site_dir, 'istack.py'))
    shutil.copy('src/datastructures/iqueue.py', os.path.join(site_dir, 'iqueue.py'))
    shutil.copy('src/datastructures/arraystack.py', os.path.join(site_dir, 'arraystack.py'))
    shutil.copy('src/datastructures/circularqueue.py', os.path.join(site_dir, 'circularqueue.py'))
    shutil.copy('src/tests/test_arraystack.py', os.path.join(site_dir, 'test_arraystack.py'))
    shutil.copy('src/tests/test_circularqueue.py', os.path.join(site_dir, 'test_circularqueue.py'))

    shutil.copy('src/datastructures/ilinkedlist.py', os.path.join(site_dir, 'ilinkedlist.py'))
    shutil.copy('src/datastructures/linkedlist.py', os.path.join(site_dir, 'linkedlist.py'))
    shutil.copy('src/tests/test_linkedlist.py', os.path.join(site_dir, 'test_linkedlist.py'))

    # shutil.copytree('static', os.path.join(site_dir, 'static'))


