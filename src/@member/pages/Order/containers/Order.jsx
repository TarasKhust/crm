import React, { useState, useRef } from "react";
import "antd/dist/antd.css";
import { Table, Input, Button, Space, Popconfirm, message } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { useQueryOrder, useRemoveOrder } from "api/order-api";
import { ORDER_QUERY } from "api/schema/order.schema";
import moment from "moment";

export const Order = () => {
	const textInput = useRef(null);

	const { data, loading } = useQueryOrder();

	const { setValue, error: errorMessage } = useRemoveOrder();

	const items = !loading ? data?.orderFindAll : [];

	const adapter = items.reduce((accum, value) => {
		const customer = { ...value.customer };

		accum.push({
			key: value.order_id,
			total: value.total,
			createdAt: moment(value.createdAt).format("D MMM YYYY h:mm"),
			updatedAt: moment(value.updatedAt).format("D MMM YYYY h:mm"),
			orderStatus: value.orderStatus.name,
			name: `${customer[0].firstName} ${customer[0].lastName} ${customer[0].surName}`,
		});

		return accum;
	}, []);

	const [state, setState] = useState({
		searchText: "",
		searchedColumn: "",
	});

	function confirm(id) {
		setValue({ variables: { id: id },
			refetchQueries: [{ query: ORDER_QUERY }] }).then(() => {
			message.success("Click on Yes");
		})
.catch(() => {
			console.log(errorMessage);
		});
	}

	function cancel(e) {
		console.log(e);
		message.error("Click on No");
	}

	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();

		setState(() => {
			return {
				searchText: selectedKeys[0],
				searchedColumn: dataIndex,
			};
		});
	};

	const handleReset = clearFilters => {
		clearFilters();

		setState(() => {
			return {
				searchText: "",
			};
		});
	};

	const getColumnSearchProps = dataIndex => ({
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
			<div style={{ padding: 8 }}>
				<Input
					ref={textInput}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
					style={{ marginBottom: 8, display: "block" }}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size="small"
						style={{ width: 90 }}
					>
						Поиск
					</Button>
					<Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
						Скинуть
					</Button>
				</Space>
			</div>
		),
		filterIcon: filtered => <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />,
		onFilter: (value, record) =>
				record[dataIndex]
						? record[dataIndex].toString().toLowerCase()
.includes(value.toLowerCase())
						: "",
		onFilterDropdownVisibleChange: visible => {
			if (visible) {
				setTimeout(() => textInput.current.select(), 100);
			}
		},
		render: text =>
				state.searchedColumn === dataIndex ? (
					<Highlighter
						highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
						searchWords={[state.searchText]}
						autoEscape
						textToHighlight={text ? text.toString() : ""}
					/>
				) : (
						text
				),
	});

		const columns = [
			{
				title: "Заказ",
				dataIndex: "key",
				key: "key",
				width: "30%",
				...getColumnSearchProps("key"),
				sorter: (a, b) => a.key - b.key,
				sortDirections: ["descend", "ascend"],
			},
			{
				title: "Покупатель",
				dataIndex: "name",
				key: "name",
				width: "20%",
				...getColumnSearchProps("name"),
				sorter: (a, b) => a.name.length - b.name.length,
				sortDirections: ["descend", "ascend"],
			},
			{
				title: "Статус",
				dataIndex: "orderStatus",
				key: "orderStatus",
				...getColumnSearchProps("orderStatus"),
				sorter: (a, b) => a.orderStatus.length - b.orderStatus.length,
				sortDirections: ["descend", "ascend"],
			},
			{
				title: "Всего",
				dataIndex: "total",
				key: "total",
				...getColumnSearchProps("total"),
				sorter: (a, b) => a.total - b.total,
				sortDirections: ["descend", "ascend"],
			},
			{
				title: "Создан",
				dataIndex: "createdAt",
				key: "createdAt",
				...getColumnSearchProps("createdAt"),
				sorter: (a, b) => new Date(b.date) - new Date(a.date),
				sortDirections: ["descend", "ascend"],
			},
			{
				title: "Обновлен",
				dataIndex: "updatedAt",
				key: "updatedAt",
				...getColumnSearchProps("updatedAt"),
				sorter: (a, b) => a.updatedAt - b.updatedAt,
				sortDirections: ["descend", "ascend"],
			},
			{
				title: "Действие",
				dataIndex: "action",
				key: "action",
				render: (text, record) => (
					<Space size="middle">
						<a>
							Обзор
							{record.lastName}
						</a>
						<Popconfirm
							title="Are you sure to delete this task?"
							onConfirm={() => confirm(record.key)}
							onCancel={cancel}
							okText="Yes"
							cancelText="No"
						>
							<a href="#">Delete</a>
						</Popconfirm>

					</Space>
		),
			},
		];

		return (
			<Table columns={columns} dataSource={adapter} />

		);
};

export default Order;
