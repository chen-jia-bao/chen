<html>
<#include "../common/header.ftl">

<body>
<div id="wrapper" class="toggled">

	<#--边栏sidebar-->
	<#include "../common/nav.ftl">

	<#--主要内容content-->
	<div id="page-content-wrapper">
		<div class="container-fluid">
			<div class="row clearfix">
				<div class="col-md-12 column">
					<table class="table table-bordered table-condensed">
						<thead>
						<tr>
							<th>评论id</th>
							<th>名字</th>
<#--							<th>头像</th>-->
							<th>评论内容</th>
							<th>创建时间</th>
							<th>操作</th>
						</tr>
						</thead>
						<tbody>

						<#list commentList as comment>
							<tr>
								<td>${comment.commentId}</td>
								<td>${comment.name}</td>
<#--								<td>${comment.avatarUrl}</td>-->
								<td>${comment.content}</td>
								<td>${comment.createTime}</td>
								<td><a href="/sell/comment/commentDelete?commentId=${comment.commentId}">删除</a></td>
							</tr>
						</#list>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

</div>
</body>
</html>