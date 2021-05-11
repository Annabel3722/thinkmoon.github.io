__NUXT_JSONP__("/post/714", (function(a,b){return {data:[{article:{cid:714,title:"【leetcode】2. Add Two Numbers两数相加",slug:"714",created:1578990300,modified:1579182130,text:"\u003C!--markdown--\u003E![【leetcode】2. Add Two Numbers两数相加][1]\r\n\r\n## 描述\r\n给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。\r\n\r\n如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。\r\n\r\n您可以假设除了数字 0 之外，这两个数都不会以 0 开头。\r\n\r\n\u003E 示例：\r\n```c\r\n输入：(2 -\u003E 4 -\u003E 3) + (5 -\u003E 6 -\u003E 4)\r\n输出：7 -\u003E 0 -\u003E 8\r\n原因：342 + 465 = 807\r\n```\r\n\r\n## 思路\r\n\r\n我看到这个题的第一感觉就是用递归把数获取出来，然后再相加，之后再把得数结构化。问题就被细分为了两个方面：\r\n1. 加数的提取\r\n2. 得数的结构化\r\n\r\n## 我的初次实现\r\n```python\r\nclass Solution:\r\n    def getStr(self,node: ListNode) -\u003E str:\r\n        if node.next == None:\r\n            return node.val\r\n        else:\r\n            last = self.getStr(node.next)\r\n            return  str(last) + str(node.val)\r\n\r\n    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -\u003E ListNode:\r\n        num1 = self.getStr(l1)\r\n        num2 = self.getStr(l2)\r\n        result = int(num1) + int(num2)\r\n        resultList = list(str(result))\r\n        tmp = ListNode(int(resultList.pop(0)))\r\n        List = tmp\r\n        while resultList:\r\n            tmp = ListNode(int(resultList.pop(0)))\r\n            tmp.next = List\r\n            List = tmp\r\n        return List\r\n```\r\n### 成果\r\n![成果][2]\r\n\r\n## 改进思路\r\n利用人列竖式算法的方法，计算每一列的值\r\n\r\n### 改进代码\r\n```python\r\nclass Solution:\r\n    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -\u003E ListNode:\r\n        # if l1.next == None and l1.val == 0:\r\n        #    return l2\r\n        # if l2.next == None and l2.val == 0:\r\n        #    return l1\r\n        l1_iter = l1\r\n        l2_iter = l2\r\n        Sum = l1_iter.val + l2_iter.val\r\n        carry = 1 if Sum \u003E= 10 else 0\r\n        Sum %= 10\r\n        List = ListNode(Sum)\r\n        l1_iter = l1_iter.next\r\n        l2_iter = l2_iter.next\r\n        Site = List\r\n        while(l1_iter != None and l2_iter != None):\r\n            Sum = l1_iter.val + l2_iter.val + carry\r\n            carry = 1 if Sum \u003E= 10 else 0\r\n            Sum %= 10\r\n            tmp = ListNode(Sum)\r\n            Site.next = tmp\r\n            Site = Site.next\r\n            l1_iter = l1_iter.next\r\n            l2_iter = l2_iter.next\r\n        last = Site\r\n        if(l1_iter == None and l2_iter == None) :\r\n            if(carry == 1):\r\n                tmp = ListNode(carry)\r\n                last.next = tmp\r\n            return List\r\n        else:\r\n            Site = l1_iter if l2_iter == None else l2_iter\r\n            tail = Site\r\n            while(Site != None and carry == 1):\r\n                Sum = Site.val + carry\r\n                Site.val = Sum % 10\r\n                carry = 0 if Sum \u003C 10 else 1\r\n                if(Site.next == None and carry == 1):\r\n                    tmp = ListNode(carry)\r\n                    Site.next = tmp\r\n                    break\r\n                Site = Site.next\r\n            last.next = tail\r\n        return List\r\n```\r\n\r\n## 成果\r\n![Add Two Numbers超越100%的Python用户][3]\r\n\r\n\r\n  [1]: https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2020-01-14T08:20:00.png\r\n  [2]: https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2020-01-14T08:25:07.png\r\n  [3]: https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2020-01-14T10:23:51.png",order:a,authorId:1,type:"post",status:"publish",commentsNum:a,allowComment:b,allowPing:b,allowFeed:b,parent:a,views:527,likes:2}}],fetch:{},mutations:void 0}}(0,"1")));