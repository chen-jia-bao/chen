package com.qcl.controller;

import com.qcl.VO.ResultVO;
import com.qcl.dataobject.Comment;
import com.qcl.dataobject.OrderMaster;
import com.qcl.dto.OrderDTO;
import com.qcl.enums.OrderStatusEnum;
import com.qcl.enums.ResultEnum;
import com.qcl.exception.SellException;
import com.qcl.repository.CommentRepository;
import com.qcl.repository.OrderMasterRepository;
import com.qcl.service.OrderService;
import com.qcl.utils.ResultVOUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Map;

/**
 * desc:评论相关
 */
@RestController
@RequestMapping("/comment")
@Slf4j
public class AdminCommentController {

    @Autowired
    private CommentRepository repository;
    @Autowired
    private OrderService orderService;
    @Autowired
    private OrderMasterRepository masterRepository;

    //订单详情
    @PostMapping("/comment")
    public ResultVO<Comment> detail(@RequestParam("openid") String openid,
                                    @RequestParam("orderId") String orderId,
                                    @RequestParam("name") String name,
                                    @RequestParam("avatarUrl") String avatarUrl,
                                    @RequestParam("content") String content) {
        if (StringUtils.isEmpty(openid) || StringUtils.isEmpty(orderId)) {
            throw new SellException(ResultEnum.PARAM_ERROR);
        }
        //提交评论
        Comment comment = new Comment();
        comment.setName(name);
        comment.setAvatarUrl(avatarUrl);
        comment.setOpenid(openid);
        comment.setContent(content);
        Comment save = repository.save(comment);

        //修改订单状态
        OrderDTO orderDTO = orderService.findOne(orderId);
        orderDTO.setOrderStatus(OrderStatusEnum.COMMENT.getCode());
        OrderMaster orderMaster = new OrderMaster();
        BeanUtils.copyProperties(orderDTO, orderMaster);
        OrderMaster updateResult = masterRepository.save(orderMaster);
        return ResultVOUtil.success(save);
    }


    @GetMapping("/commentList")
    public ModelAndView commentList(Map<String, Object> map) {
        List<Comment> all = repository.findAll();
        map.put("commentList", all);
        return new ModelAndView("common/list", map);
    }
    @GetMapping("/commentDelete")
    public ModelAndView commentDelete(@RequestParam(value = "commentId", required = false)int commentId,Map<String, Object> map) {
        //删除操作
        repository.delete(commentId);

        List<Comment> all = repository.findAll();
        map.put("commentList", all);
        return new ModelAndView("common/list", map);
    }



}
