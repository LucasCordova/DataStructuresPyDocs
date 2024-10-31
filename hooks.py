import os
import shutil

def copy_get(config, **kwargs):
    site_dir = config['site_dir']
    shutil.copy('datastructures/iarray.py', os.path.join(site_dir, 'iarray.py'))
    shutil.copy('datastructures/array.py', os.path.join(site_dir, 'array.py'))
    shutil.copy('datastructures/test_array.py', os.path.join(site_dir, 'test_array.py'))
    shutil.copy('datastructures/iavltree.py', os.path.join(site_dir, 'iavltree.py'))
    shutil.copy('datastructures/test_avltree_inserts.py', os.path.join(site_dir, 'test_avltree_inserts.py'))
    shutil.copy('datastructures/test_avltree_deletes.py', os.path.join(site_dir, 'test_avltree_deletes.py'))
    shutil.copy('datastructures/test_avltree_auxiliary.py', os.path.join(site_dir, 'test_avltree_auxiliary.py'))
    shutil.copy('datastructures/iarray2d.py', os.path.join(site_dir, 'iarray2d.py'))
    shutil.copy('datastructures/array2d.py', os.path.join(site_dir, 'array2d.py'))
    shutil.copy('datastructures/test_array2d.py', os.path.join(site_dir, 'test_array2d.py'))
    shutil.copy('datastructures/car.py', os.path.join(site_dir, 'car.py'))
    shutil.copy('datastructures/ilinkedlist.py', os.path.join(site_dir, 'ilinkedlist.py'))
    shutil.copy('datastructures/linkedlist.py', os.path.join(site_dir, 'linkedlist.py'))
    shutil.copy('datastructures/test_linkedlist.py', os.path.join(site_dir, 'test_linkedlist.py'))