import React from "react";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Quản lý thành viên",
    path: "/adminmemberlist",
    icon: <FiIcons.FiUsers />,
  },
  {
    title: "Quản lý khoá học",
    path: "",
    icon: <BsIcons.BsFillBookmarksFill />,
    iconClosed: <RiIcons.RiArrowDownSLine />,
    iconOpened: <RiIcons.RiArrowUpSLine />,

    subNav: [
      {
        title: "Danh sách khoá học",
        path: "/admincourselist",
        icon: <BiIcons.BiTable />,
        cName: "sub-nav",
      },
      {
        title: "Thêm khoá học",
        path: "/adminaddcourse",
        icon: <CgIcons.CgAdd />,
        cName: "sub-nav",
      },
      {
        title: "Chỉnh sửa khoá học",
        path: "",
        icon: <BiIcons.BiEditAlt />,
      },
    ],
  },
  {
    title: "Quản lý bài luyện tập",
    path: "",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSLine />,
    iconOpened: <RiIcons.RiArrowUpSLine />,

    subNav: [
      {
        title: "Danh sách luyện tập",
        path: "/adminexerciselist",
        icon: <BiIcons.BiTable />,
        cName: "sub-nav",
      },
      {
        title: "Thêm bài",
        path: "/adminAddExercise",
        icon: <CgIcons.CgAdd />,
        cName: "sub-nav",
      },
      {
        title: "Chỉnh sửa",
        path: "/adminUpdateExersise",
        icon: <BiIcons.BiEditAlt />,
      },
    ],
  },
  {
    title: "Quản lý blog",
    path: "",
    icon: <FaIcons.FaBlogger />,
    iconClosed: <RiIcons.RiArrowDownSLine />,
    iconOpened: <RiIcons.RiArrowUpSLine />,

    subNav: [
      {
        title: "Danh sách blog",
        path: "/adminbloglist",
        icon: <BiIcons.BiTable />,
        cName: "sub-nav",
      },
      {
        title: "Thêm blog",
        path: "/adminaddblog",
        icon: <CgIcons.CgAdd />,
        cName: "sub-nav",
      },
      {
        title: "Chỉnh sửa",
        path: "",
        icon: <BiIcons.BiEditAlt />,
      },
    ],
  },
  {
    title: "Thống kê",
    path: "",
    icon: <BsIcons.BsCardList />,
  },
];
