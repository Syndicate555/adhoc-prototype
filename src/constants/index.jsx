import {
	Accessibility,
	Activity,
	AlertCircle,
	Award,
	Bell,
	Bot,
	Briefcase,
	Camera,
	Cloud,
	DollarSign,
	FileText,
	Gift,
	Globe,
	Layers,
	Leaf,
	Link,
	List,
	Lock,
	MessageCircle,
	PieChart,
	Receipt,
	RotateCcw,
	Share,
	Share2,
	ShieldCheck,
	Sliders,
	Tag,
	TrendingUp,
	Wallet,
	WifiOff,
} from 'lucide-react';
import {
	FaShoppingCart,
	FaGasPump,
	FaUtensils,
	FaShoppingBag,
	FaThLarge,
} from 'react-icons/fa';

export const presetReceipts = [
	{
		id: 'receipt_groceries_1',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153654/13_ixxb8c.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_groceries_2',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153652/12_fkfkpa.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_groceries_3',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153652/11_mxbrye.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_groceries_4',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153651/10_thsbs2.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_groceries_5',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153651/9_zsmdbh.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_groceries_6',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153650/8_nefhva.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_groceries_7',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153650/7_yvua0y.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_groceries_8',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153649/6_y8lklm.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_groceries_9',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153649/5_oqjual.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_groceries_10',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153648/4_b3auho.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_groceries_11',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153648/3_gqz9pc.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_groceries_12',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153647/2_ecxbuz.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_groceries_13',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153647/1_qqjqbx.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_groceries_14',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153627/18_dlgj6y.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_groceries_15',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153627/17_bkhq8k.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_groceries_16',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153626/15_pcxtkh.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_groceries_17',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153625/14_nhshr1.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_groceries_18',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153625/13_gdj7u1.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_groceries_19',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153624/12_jjbeze.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_groceries_20',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153623/11_jnmidp.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_groceries_21',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153623/10_dtfmwb.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_groceries_22',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153622/9_oidxy6.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_groceries_23',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153621/8_ens9e5.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_groceries_24',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153621/7_vtgo9e.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_groceries_25',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153620/6_rfokse.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_groceries_26',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153620/5_dmjvcv.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_groceries_27',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153620/4_hnnlvs.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_groceries_28',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153619/3_dqol01.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_groceries_29',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153619/2_zmukxs.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_groceries_30',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153618/1_ubyzmk.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_groceries_31',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153618/16_mn5zxu.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_groceries_32',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153434/28_uykdho.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_33',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153434/27_mcd3ol.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_34',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153433/26_vuafp8.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_35',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153433/25_mkhsqf.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_36',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153433/24_cuhh2w.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_37',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153432/22_tov1et.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_38',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153432/23_jb66sm.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_39',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153432/21_fntulq.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_40',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153431/20_ctepd2.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_41',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153431/19_jhii4j.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_42',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153431/18_xuyn3k.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_43',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153430/17_ulc7bh.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_44',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153430/16_cv4agn.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_45',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153429/15_qbmj3w.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_46',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153429/14_fklpwo.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_47',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153429/13_j8ktit.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_48',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153428/12_cv017e.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_49',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153428/11_zzuqfw.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_50',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153428/10_okqmhy.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_51',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153427/9_k6g9lj.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_52',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153427/8_poid6f.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_53',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153427/7_ht6jfl.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_54',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153427/6_zbu16e.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_55',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/4_kycml9.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_56',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/5_ijkqqt.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_57',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/3_xs8znz.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_58',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/2_lk2fpk.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_59',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/1_cxkg1j.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_groceries_60',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153370/46_duf8h2.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_61',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153370/refund_l98sll.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_62',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153369/45_f53m9j.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_63',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153368/44_mpse8i.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_64',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153367/43_rep95d.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_65',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153366/41_palnix.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_66',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153366/42_fxxrkh.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_67',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153366/40_shkxjb.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_68',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153365/38_fpznht.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_69',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153365/39_jjsvme.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_70',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153363/37_e66zoj.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_71',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/35_zwdfvi.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_72',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153363/36_yutypc.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_73',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/32_kcftp2.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_74',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/31_jkl8p3.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_75',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/33_vvuweq.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_76',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/34_pkvgag.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_77',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153361/30_eqkbk3.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_78',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153361/29_qb0wwk.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_79',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153361/28_thmnzl.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_80',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153355/26_vvdub7.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_81',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153355/25_hk2blf.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_82',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153354/24_dqox4v.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_83',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153354/27_w2fhj4.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_84',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153354/19_zoboiz.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_85',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/22_tjwvlc.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_86',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/23_w9dbvl.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_87',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153354/21_fado39.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_88',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/20_dvm0w8.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_89',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/18_x39iws.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_90',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/17_rnhx4f.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_91',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153352/16_cafgtp.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_92',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153352/14_od4g0l.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_93',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153352/15_vwc5ei.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_94',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153351/10_e8l4wl.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_95',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153351/13_td1llo.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_96',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153351/11_ebjzbw.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_97',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153351/12_wqic32.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_98',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/9_twqu6w.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_99',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/3_gk5k7i.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_100',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/2_xk3oge.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_101',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/7_sj56ph.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_102',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/6_uqwwno.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_103',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153349/8_dumsui.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_104',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153349/4_iad3ae.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_105',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153349/5_syzjid.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_groceries_106',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153348/1_bcyyn6.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_1',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153654/13_ixxb8c.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_gas_2',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153652/12_fkfkpa.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_gas_3',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153652/11_mxbrye.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_gas_4',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153651/10_thsbs2.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_gas_5',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153651/9_zsmdbh.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_gas_6',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153650/8_nefhva.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_gas_7',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153650/7_yvua0y.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_gas_8',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153649/6_y8lklm.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_gas_9',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153649/5_oqjual.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_gas_10',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153648/4_b3auho.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_gas_11',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153648/3_gqz9pc.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_gas_12',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153647/2_ecxbuz.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_gas_13',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153647/1_qqjqbx.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_gas_14',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153627/18_dlgj6y.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_gas_15',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153627/17_bkhq8k.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_gas_16',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153626/15_pcxtkh.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_gas_17',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153625/14_nhshr1.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_gas_18',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153625/13_gdj7u1.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_gas_19',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153624/12_jjbeze.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_gas_20',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153623/11_jnmidp.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_gas_21',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153623/10_dtfmwb.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_gas_22',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153622/9_oidxy6.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_gas_23',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153621/8_ens9e5.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_gas_24',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153621/7_vtgo9e.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_gas_25',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153620/6_rfokse.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_gas_26',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153620/5_dmjvcv.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_gas_27',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153620/4_hnnlvs.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_gas_28',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153619/3_dqol01.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_gas_29',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153619/2_zmukxs.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_gas_30',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153618/1_ubyzmk.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_gas_31',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153618/16_mn5zxu.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_gas_32',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153434/28_uykdho.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_33',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153434/27_mcd3ol.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_34',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153433/26_vuafp8.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_35',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153433/25_mkhsqf.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_36',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153433/24_cuhh2w.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_37',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153432/22_tov1et.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_38',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153432/23_jb66sm.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_39',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153432/21_fntulq.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_40',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153431/20_ctepd2.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_41',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153431/19_jhii4j.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_42',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153431/18_xuyn3k.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_43',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153430/17_ulc7bh.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_44',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153430/16_cv4agn.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_45',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153429/15_qbmj3w.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_46',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153429/14_fklpwo.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_47',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153429/13_j8ktit.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_48',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153428/12_cv017e.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_49',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153428/11_zzuqfw.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_50',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153428/10_okqmhy.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_51',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153427/9_k6g9lj.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_52',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153427/8_poid6f.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_53',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153427/7_ht6jfl.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_54',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153427/6_zbu16e.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_55',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/4_kycml9.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_56',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/5_ijkqqt.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_57',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/3_xs8znz.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_58',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/2_lk2fpk.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_59',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/1_cxkg1j.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_gas_60',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153370/46_duf8h2.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_61',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153370/refund_l98sll.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_62',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153369/45_f53m9j.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_63',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153368/44_mpse8i.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_64',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153367/43_rep95d.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_65',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153366/41_palnix.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_66',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153366/42_fxxrkh.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_67',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153366/40_shkxjb.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_68',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153365/38_fpznht.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_69',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153365/39_jjsvme.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_70',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153363/37_e66zoj.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_71',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/35_zwdfvi.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_72',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153363/36_yutypc.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_73',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/32_kcftp2.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_74',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/31_jkl8p3.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_75',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/33_vvuweq.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_76',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/34_pkvgag.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_77',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153361/30_eqkbk3.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_78',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153361/29_qb0wwk.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_79',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153361/28_thmnzl.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_80',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153355/26_vvdub7.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_81',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153355/25_hk2blf.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_82',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153354/24_dqox4v.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_83',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153354/27_w2fhj4.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_84',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153354/19_zoboiz.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_85',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/22_tjwvlc.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_86',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/23_w9dbvl.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_87',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153354/21_fado39.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_88',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/20_dvm0w8.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_89',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/18_x39iws.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_90',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/17_rnhx4f.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_91',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153352/16_cafgtp.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_92',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153352/14_od4g0l.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_93',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153352/15_vwc5ei.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_94',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153351/10_e8l4wl.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_95',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153351/13_td1llo.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_96',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153351/11_ebjzbw.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_97',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153351/12_wqic32.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_98',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/9_twqu6w.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_99',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/3_gk5k7i.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_100',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/2_xk3oge.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_101',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/7_sj56ph.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_102',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/6_uqwwno.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_103',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153349/8_dumsui.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_104',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153349/4_iad3ae.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_105',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153349/5_syzjid.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_gas_106',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153348/1_bcyyn6.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_1',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153654/13_ixxb8c.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_restaurants_2',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153652/12_fkfkpa.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_restaurants_3',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153652/11_mxbrye.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_restaurants_4',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153651/10_thsbs2.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_restaurants_5',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153651/9_zsmdbh.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_restaurants_6',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153650/8_nefhva.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_restaurants_7',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153650/7_yvua0y.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_restaurants_8',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153649/6_y8lklm.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_restaurants_9',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153649/5_oqjual.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_restaurants_10',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153648/4_b3auho.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_restaurants_11',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153648/3_gqz9pc.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_restaurants_12',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153647/2_ecxbuz.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_restaurants_13',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153647/1_qqjqbx.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_restaurants_14',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153627/18_dlgj6y.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_restaurants_15',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153627/17_bkhq8k.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_restaurants_16',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153626/15_pcxtkh.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_restaurants_17',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153625/14_nhshr1.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_restaurants_18',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153625/13_gdj7u1.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_restaurants_19',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153624/12_jjbeze.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_restaurants_20',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153623/11_jnmidp.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_restaurants_21',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153623/10_dtfmwb.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_restaurants_22',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153622/9_oidxy6.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_restaurants_23',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153621/8_ens9e5.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_restaurants_24',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153621/7_vtgo9e.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_restaurants_25',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153620/6_rfokse.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_restaurants_26',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153620/5_dmjvcv.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_restaurants_27',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153620/4_hnnlvs.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_restaurants_28',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153619/3_dqol01.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_restaurants_29',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153619/2_zmukxs.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_restaurants_30',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153618/1_ubyzmk.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_restaurants_31',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153618/16_mn5zxu.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_restaurants_32',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153434/28_uykdho.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_33',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153434/27_mcd3ol.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_34',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153433/26_vuafp8.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_35',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153433/25_mkhsqf.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_36',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153433/24_cuhh2w.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_37',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153432/22_tov1et.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_38',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153432/23_jb66sm.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_39',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153432/21_fntulq.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_40',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153431/20_ctepd2.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_41',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153431/19_jhii4j.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_42',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153431/18_xuyn3k.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_43',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153430/17_ulc7bh.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_44',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153430/16_cv4agn.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_45',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153429/15_qbmj3w.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_46',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153429/14_fklpwo.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_47',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153429/13_j8ktit.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_48',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153428/12_cv017e.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_49',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153428/11_zzuqfw.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_50',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153428/10_okqmhy.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_51',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153427/9_k6g9lj.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_52',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153427/8_poid6f.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_53',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153427/7_ht6jfl.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_54',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153427/6_zbu16e.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_55',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/4_kycml9.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_56',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/5_ijkqqt.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_57',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/3_xs8znz.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_58',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/2_lk2fpk.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_59',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/1_cxkg1j.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_restaurants_60',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153370/46_duf8h2.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_61',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153370/refund_l98sll.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_62',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153369/45_f53m9j.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_63',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153368/44_mpse8i.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_64',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153367/43_rep95d.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_65',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153366/41_palnix.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_66',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153366/42_fxxrkh.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_67',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153366/40_shkxjb.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_68',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153365/38_fpznht.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_69',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153365/39_jjsvme.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_70',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153363/37_e66zoj.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_71',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/35_zwdfvi.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_72',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153363/36_yutypc.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_73',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/32_kcftp2.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_74',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/31_jkl8p3.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_75',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/33_vvuweq.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_76',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/34_pkvgag.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_77',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153361/30_eqkbk3.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_78',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153361/29_qb0wwk.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_79',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153361/28_thmnzl.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_80',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153355/26_vvdub7.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_81',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153355/25_hk2blf.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_82',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153354/24_dqox4v.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_83',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153354/27_w2fhj4.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_84',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153354/19_zoboiz.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_85',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/22_tjwvlc.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_86',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/23_w9dbvl.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_87',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153354/21_fado39.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_88',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/20_dvm0w8.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_89',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/18_x39iws.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_90',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/17_rnhx4f.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_91',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153352/16_cafgtp.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_92',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153352/14_od4g0l.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_93',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153352/15_vwc5ei.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_94',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153351/10_e8l4wl.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_95',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153351/13_td1llo.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_96',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153351/11_ebjzbw.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_97',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153351/12_wqic32.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_98',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/9_twqu6w.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_99',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/3_gk5k7i.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_100',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/2_xk3oge.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_101',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/7_sj56ph.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_102',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/6_uqwwno.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_103',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153349/8_dumsui.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_104',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153349/4_iad3ae.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_105',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153349/5_syzjid.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_restaurants_106',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153348/1_bcyyn6.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_1',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153654/13_ixxb8c.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_shopping_2',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153652/12_fkfkpa.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_shopping_3',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153652/11_mxbrye.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_shopping_4',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153651/10_thsbs2.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_shopping_5',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153651/9_zsmdbh.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_shopping_6',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153650/8_nefhva.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_shopping_7',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153650/7_yvua0y.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_shopping_8',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153649/6_y8lklm.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_shopping_9',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153649/5_oqjual.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_shopping_10',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153648/4_b3auho.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_shopping_11',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153648/3_gqz9pc.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_shopping_12',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153647/2_ecxbuz.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_shopping_13',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153647/1_qqjqbx.jpg',
		categories: ['shopping'],
	},
	{
		id: 'receipt_shopping_14',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153627/18_dlgj6y.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_shopping_15',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153627/17_bkhq8k.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_shopping_16',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153626/15_pcxtkh.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_shopping_17',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153625/14_nhshr1.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_shopping_18',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153625/13_gdj7u1.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_shopping_19',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153624/12_jjbeze.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_shopping_20',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153623/11_jnmidp.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_shopping_21',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153623/10_dtfmwb.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_shopping_22',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153622/9_oidxy6.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_shopping_23',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153621/8_ens9e5.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_shopping_24',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153621/7_vtgo9e.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_shopping_25',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153620/6_rfokse.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_shopping_26',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153620/5_dmjvcv.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_shopping_27',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153620/4_hnnlvs.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_shopping_28',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153619/3_dqol01.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_shopping_29',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153619/2_zmukxs.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_shopping_30',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153618/1_ubyzmk.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_shopping_31',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153618/16_mn5zxu.jpg',
		categories: ['restaurants'],
	},
	{
		id: 'receipt_shopping_32',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153434/28_uykdho.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_33',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153434/27_mcd3ol.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_34',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153433/26_vuafp8.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_35',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153433/25_mkhsqf.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_36',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153433/24_cuhh2w.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_37',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153432/22_tov1et.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_38',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153432/23_jb66sm.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_39',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153432/21_fntulq.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_40',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153431/20_ctepd2.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_41',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153431/19_jhii4j.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_42',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153431/18_xuyn3k.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_43',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153430/17_ulc7bh.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_44',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153430/16_cv4agn.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_45',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153429/15_qbmj3w.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_46',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153429/14_fklpwo.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_47',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153429/13_j8ktit.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_48',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153428/12_cv017e.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_49',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153428/11_zzuqfw.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_50',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153428/10_okqmhy.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_51',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153427/9_k6g9lj.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_52',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153427/8_poid6f.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_53',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153427/7_ht6jfl.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_54',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153427/6_zbu16e.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_55',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/4_kycml9.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_56',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/5_ijkqqt.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_57',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/3_xs8znz.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_58',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/2_lk2fpk.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_59',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153426/1_cxkg1j.jpg',
		categories: ['gas'],
	},
	{
		id: 'receipt_shopping_60',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153370/46_duf8h2.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_61',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153370/refund_l98sll.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_62',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153369/45_f53m9j.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_63',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153368/44_mpse8i.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_64',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153367/43_rep95d.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_65',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153366/41_palnix.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_66',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153366/42_fxxrkh.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_67',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153366/40_shkxjb.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_68',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153365/38_fpznht.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_69',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153365/39_jjsvme.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_70',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153363/37_e66zoj.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_71',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/35_zwdfvi.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_72',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153363/36_yutypc.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_73',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/32_kcftp2.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_74',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/31_jkl8p3.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_75',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/33_vvuweq.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_76',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153362/34_pkvgag.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_77',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153361/30_eqkbk3.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_78',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153361/29_qb0wwk.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_79',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153361/28_thmnzl.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_80',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153355/26_vvdub7.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_81',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153355/25_hk2blf.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_82',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153354/24_dqox4v.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_83',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153354/27_w2fhj4.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_84',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153354/19_zoboiz.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_85',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/22_tjwvlc.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_86',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/23_w9dbvl.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_87',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153354/21_fado39.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_88',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/20_dvm0w8.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_89',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/18_x39iws.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_90',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153353/17_rnhx4f.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_91',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153352/16_cafgtp.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_92',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153352/14_od4g0l.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_93',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153352/15_vwc5ei.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_94',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153351/10_e8l4wl.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_95',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153351/13_td1llo.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_96',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153351/11_ebjzbw.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_97',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153351/12_wqic32.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_98',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/9_twqu6w.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_99',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/3_gk5k7i.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_100',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/2_xk3oge.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_101',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/7_sj56ph.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_102',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153350/6_uqwwno.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_103',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153349/8_dumsui.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_104',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153349/4_iad3ae.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_105',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153349/5_syzjid.jpg',
		categories: ['groceries'],
	},
	{
		id: 'receipt_shopping_106',
		imageUrl:
			'https://res.cloudinary.com/dsdumoonx/image/upload/v1732153348/1_bcyyn6.jpg',
		categories: ['groceries'],
	},
];

export const categories = [
	{ name: 'All Receipts', icon: <FaThLarge />, value: 'all' },
	{ name: 'Grocery', icon: <FaShoppingCart />, value: 'groceries' },
	{ name: 'Gas', icon: <FaGasPump />, value: 'gas' },
	{ name: 'Restaurant', icon: <FaUtensils />, value: 'restaurants' },
	{ name: 'Shopping', icon: <FaShoppingBag />, value: 'shopping' },
];

import {
	discordBlack,
	facebook,
	instagram,
	telegram,
	twitter,
	homeSmile,
	file02,
	searchMd,
	plusSquare,
} from '../assets';

import user1 from '../assets/profile-pictures/user1.jpg';
import user2 from '../assets/profile-pictures/user2.jpg';
import user3 from '../assets/profile-pictures/user3.jpg';
import user4 from '../assets/profile-pictures/user4.jpg';
import user5 from '../assets/profile-pictures/user5.jpg';
import user6 from '../assets/profile-pictures/user6.jpg';

export const navItems = [
	{ label: 'Features', href: '#' },
	{ label: 'Company', href: '#' },
	// { label: 'Blogs', href: '#' },
	// { label: 'Testimonials', href: '#' },
];

export const testimonials = [
	{
		user: 'John Doe',
		company: 'Stellar Solutions',
		image: user1,
		text: 'I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.',
	},
];

export const features = [
	{
		icon: <Receipt />,
		text: 'Centralized Digital Receipts',
		description:
			'Store all your receipts in one secure place with detailed, itemized data for every purchase, eliminating paper clutter and making retrieval effortless.',
	},
	{
		icon: <Activity />,
		text: 'AI-Driven Insights',
		description:
			'Leverage advanced AI algorithms to analyze your spending habits, providing personalized insights that help you make smarter financial decisions.',
	},
	{
		icon: <Wallet />,
		text: 'Personal Finance Management',
		description:
			'Set budgets, track spending, and monitor expenses across categories and vendors, all within a single intuitive app.',
	},
	{
		icon: <Bot />,
		text: 'Personalized AI Assistant',
		description:
			'Receive tailored financial advice from an AI assistant that understands your unique spending patterns and goals.',
	},
	{
		icon: <Leaf />,
		text: 'Eco-Friendly Solution',
		description:
			'Contribute to a greener planet by eliminating paper receipts, reducing waste, and lowering carbon emissions associated with paper production.',
	},
	{
		icon: <Gift />,
		text: 'Rewards and Incentives',
		description:
			'Earn points for using Platen, redeemable for monetary value through various gift cards, incentivizing you to keep track of your purchases.',
	},
	{
		icon: <Camera />,
		text: 'Easy Receipt Uploads',
		description:
			'Add receipts manually by taking a picture, ensuring no purchase goes untracked—even from vendors not yet integrated with Platen.',
	},
	{
		icon: <Tag />,
		text: 'Personalized Vendor Offers',
		description:
			'Receive custom discounts and promotions from vendors based on your purchase history, helping you save money on products you love.',
	},
	{
		icon: <PieChart />,
		text: 'Comprehensive Spending Analytics',
		description:
			'Visualize your expenses with interactive charts and graphs, giving you a clear picture of where your money goes.',
	},
	{
		icon: <Globe />,
		text: 'Environmental Impact Tracker',
		description:
			'Track and quantify your environmental impact by choosing digital, turning sustainable choices into measurable achievements.',
	},
	{
		icon: <ShieldCheck />,
		text: 'Secure Data Storage',
		description:
			'Benefit from top-notch security protocols that protect your financial data, ensuring your information remains private and secure.',
	},
	{
		icon: <Bell />,
		text: 'Smart Notifications',
		description:
			'Stay informed with timely notifications about upcoming bills, expiring warranties, or when items you’ve purchased go on sale.',
	},
	{
		icon: <List />,
		text: 'Expense Categorization',
		description:
			'Automatically categorize your expenses for easier tracking and budgeting, making financial management more streamlined than ever.',
	},
	{
		icon: <FileText />,
		text: 'Tax Preparation Assistance',
		description:
			'Simplify tax season with organized receipts and categorized expenses, making it easier to claim deductions and prepare your returns.',
	},
	{
		icon: <TrendingUp />,
		text: 'Price Comparison',
		description:
			'Compare prices of items between different vendors to ensure you always get the best deal.',
	},
	{
		icon: <RotateCcw />,
		text: 'Return and Warranty Tracking',
		description:
			'Keep track of purchase dates and warranty periods, making returns and warranty claims hassle-free.',
	},
	{
		icon: <Briefcase />,
		text: 'Business Expense Management',
		description:
			'Easily tag and separate personal and business expenses, simplifying reimbursements and accounting for freelancers and professionals.',
	},
	{
		icon: <Sliders />,
		text: 'Customizable Budgeting Tools',
		description:
			'Tailor your budgeting experience with customizable categories and limits that fit your unique financial situation.',
	},
	{
		icon: <Lock />,
		text: 'User Privacy Controls',
		description:
			'Have full control over your data with robust privacy settings, allowing you to decide what information is shared and with whom.',
	},
	{
		icon: <Award />,
		text: 'Gamification Elements',
		description:
			'Engage with your finances through gamified experiences that make managing money fun and rewarding.',
	},
	{
		icon: <Link />,
		text: 'Seamless Vendor Integration',
		description:
			'Enjoy a seamless shopping experience with direct integration at point-of-sale terminals, eliminating the need for paper receipts entirely.',
	},
	{
		icon: <Cloud />,
		text: 'Cloud Synchronization',
		description:
			'Access your receipts and financial data from any device with automatic cloud synchronization.',
	},
	{
		icon: <Share />,
		text: 'Data Export and Sharing',
		description:
			'Export your financial data in various formats to share with accountants or import into other financial software.',
	},
	{
		icon: <DollarSign />,
		text: 'Multi-Currency Support',
		description:
			'Track purchases and manage expenses in multiple currencies, ideal for travelers and international shoppers.',
	},
	{
		icon: <Accessibility />,
		text: 'Accessibility Features',
		description:
			'Designed with inclusivity in mind, offering features that make the app usable for people with disabilities.',
	},
	{
		icon: <Layers />,
		text: 'Integration with Financial Apps',
		description:
			'Sync Platen with other financial applications and services for a holistic view of your finances.',
	},
	{
		icon: <MessageCircle />,
		text: 'Customer Support Chatbot',
		description:
			'Get instant assistance with any queries or issues through an integrated customer support chatbot.',
	},
	{
		icon: <AlertCircle />,
		text: 'Smart Purchase Alerts',
		description:
			'Receive alerts when items you frequently purchase are on sale, maximizing your savings.',
	},
	{
		icon: <Share2 />,
		text: 'Social Sharing',
		description:
			'Share your eco-friendly achievements and savings milestones with friends and family on social media.',
	},
	{
		icon: <WifiOff />,
		text: 'Offline Access',
		description:
			'Access your stored receipts and financial data even without an internet connection.',
	},
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const socials = [
	{
		id: '0',
		title: 'Discord',
		iconUrl: discordBlack,
		url: '#',
	},
	{
		id: '1',
		title: 'Twitter',
		iconUrl: twitter,
		url: '#',
	},
	{
		id: '2',
		title: 'Instagram',
		iconUrl: instagram,
		url: '#',
	},
	{
		id: '3',
		title: 'Telegram',
		iconUrl: telegram,
		url: '#',
	},
	{
		id: '4',
		title: 'Facebook',
		iconUrl: facebook,
		url: '#',
	},
];

export const pricingOptions = [
	{
		title: 'Free',
		price: '$0',
		features: [
			'Private board sharing',
			'5 Gb Storage',
			'Web Analytics',
			'Private Mode',
		],
	},
	{
		title: 'Pro',
		price: '$10',
		features: [
			'Private board sharing',
			'10 Gb Storage',
			'Web Analytics (Advance)',
			'Private Mode',
		],
	},
	{
		title: 'Enterprise',
		price: '$200',
		features: [
			'Private board sharing',
			'Unlimited Storage',
			'High Performance Network',
			'Private Mode',
		],
	},
];

export const resourcesLinks = [
	{ href: '#', text: 'Getting Started' },
	{ href: '#', text: 'Documentation' },
	{ href: '#', text: 'Tutorials' },
	{ href: '#', text: 'API Reference' },
	{ href: '#', text: 'Community Forums' },
];

export const platformLinks = [
	{ href: '#', text: 'Features' },
	{ href: '#', text: 'Supported Devices' },
	{ href: '#', text: 'System Requirements' },
	{ href: '#', text: 'Downloads' },
	{ href: '#', text: 'Release Notes' },
];

export const communityLinks = [
	{ href: '#', text: 'Events' },
	{ href: '#', text: 'Meetups' },
	{ href: '#', text: 'Conferences' },
	{ href: '#', text: 'Hackathons' },
	{ href: '#', text: 'Jobs' },
];
