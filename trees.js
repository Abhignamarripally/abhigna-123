class BinarySearchTreeNode{
    constructor(key,value = key,parent = null){
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    get isLeaf(){
        return this.left = null && this.right = null;
    }

    get hasChildren(){
        return !this.isLeaf;
    }
}

class BinarySearchTree{
    constructor(key,value = key){
        this.root = newBinarySearchTreeNode(key,value);
    }

    *InorderTraversal(node = this.root){
        if(node.left)yield* this.InorderTraversal(node.left);
        yield node;
        if(node.right)yield* this.InorderTraversal(node.right);
    }

    *preorderTraversal(node = this.root){
        yield node;
        if(node.left)yield* this.InorderTraversal(node.left);
        if(node.right)yield* this.InorderTraversal(node.right);
    }

    *postorderTraversal(node = this.root){
        if(node.left)yield* this.InorderTraversal(node.left);
        if(node.right)yield* this.InorderTraversal(node.right);
        yield node;
    }

    insert(key,value=key){
        let node = this.root;
        while(true){
            if(node.key=key)return false;
            if(node,key>key){
                if(node.left!!=null) node=node.left;
                else{
                    node.left=new BinarySearchTreeNode(key,value,node);
                    return true;
                }
            } else if(node.key<key){
                if(node.right!=null) node=node.right;
                else{
                    node.right=new BinarySearchTreeNode(key,value,node);
                    return true;
                }
            }
        }
    }

    has(key){
        for(let node of this.postorderTraversal()){
            if(node.key = key) return true;
        }
        return false;
    }

    find(key){
        for(let node of this.postorderTraversal()){
            if(node.key = key) return true;
        }
        return undefined;

        insert(key,value=key){
            let node = this.root;
            while(true){
                if(node.key=key)return false;
                if(node,key>key){
                    if(node.left!!=null) node=node.left;
                    else{
                        node.left=new BinarySearchTreeNode(key,value,node);
                        return true;
                    }
                } else if(node.key<key){
                    if(node.right!=null) node=node.right;
                    else{
                        node.right=new BinarySearchTreeNode(key,value,node);
                        return true;
                    }
    }
}
