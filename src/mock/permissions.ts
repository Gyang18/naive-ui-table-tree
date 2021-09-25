export interface PermissionsMenu {
	title: string;
	id: string | number;
	checked?: boolean;
	expand?: boolean;
	indeterminate?: boolean;
	children?: PermissionsMenu[];
	showRow?: boolean;
	isShowCheckbox?: boolean;
}

export type PermissionsMenuList = PermissionsMenu[];

export const permissionsMenus: PermissionsMenuList = [
	{
		title: '环银通业务管理',
		id: '1',
		children: [
			{
				title: '环银通机构管理',
				id: '1-1',
				children: [
					{
						title: '新增',
						id: '1-1-1',
					},
					{
						title: '编辑',
						id: '1-1-2',
					},
					{
						title: '查询',
						id: '1-1-3',
					}
				]
			},
			{
				title: '投票管理',
				id: '1-2',
				children: [
					{
						title: '投票',
						id: '1-2-1',
					},
					{
						title: '查询',
						id: '1-2-2',
					},
				]
			}
		],
	},
	{
		title: '区块链治理',
		id: '2',
		children: [
			{
				title: '我的机构域',
				id: '2-1',
				children: [
					{
						title: '查看节点列表',
						id: '2-1-1',
						children: [
							{
								title: '节点1',
								id: '2-1-1-1'
							},
							{
								title: '节点2',
								id: '2-1-1-2'
							}
						],
					},
				]
			},
			{
				title: '环银通网络治理',
				id: '2-2',
				children: [
					{
						title: '网络治理',
						id: '2-2-1',
					},
					{
						title: '网络动态',
						id: '2-2-2',
					},
					{
						title: '查询',
						id: '2-2-2',
					},
				]
			}
		],
	},
	{
		title: '权限管理',
		id: '3',
		children: [
			{
				title: '角色管理',
				id: '3-1',
				children: [
					{
						title: '新增',
						id: '3-1-1',
					},
					{
						title: '编辑',
						id: '3-1-2',
					},
					{
						title: '删除',
						id: '3-1-3',
					},
				]
			},
			{
				title: '用户管理',
				id: '3-2',
				children: [
					{
						title: '新增',
						id: '3-2-1',
					},
					{
						title: '编辑',
						id: '3-2-2',
					},
					{
						title: '删除',
						id: '3-2-3',
					},
				]
			}
		],
	},
	{
		title: '权限管理-test',
		id: '4',
		children: [
			{
				title: '角色管理',
				id: '4-1',
				children: []
			},
		],
	}
];