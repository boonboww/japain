import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CloudPatternButton } from '@/components/ui/CloudPatternButton';
import { CharacterCard } from '@/components/ui/CharacterCard';
import { IconNumber } from '@/components/ui/AkatsukiSVGs';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const homeModules = [
  {
    title: "Ngữ Pháp",
    subtitle: "ぶんぽう",
    description: "Cấu trúc cốt lõi. Phân tích chính xác, áp dụng linh hoạt vào thực chiến.",
    link: "/grammar",
    IconComponent: (props) => <IconNumber number="01" {...props} />,
    indexStr: "01"
  },
  {
    title: "Hội Thoại",
    subtitle: "かいわ",
    description: "Phản xạ sinh tồn. Đối đáp nhanh nhạy trong mọi tình huống đời thường.",
    link: "/conversation",
    IconComponent: (props) => <IconNumber number="02" {...props} />,
    indexStr: "02"
  },
  {
    title: "Từ Vựng",
    subtitle: "たんご",
    description: "Trang giấy ghi nhớ. Nhớ nhanh và sắc bén, không động tác thừa.",
    link: "/vocab",
    IconComponent: (props) => <IconNumber number="03" {...props} />,
    indexStr: "03"
  },
  {
    title: "Số Đếm",
    subtitle: "すうじ",
    description: "Kiểm soát thông tin lượng lớn. Đắm chìm vào xử lý con số, ngày tháng.",
    link: "/numbers",
    IconComponent: (props) => <IconNumber number="04" {...props} />,
    indexStr: "04"
  },
  {
    title: "Văn Hoá Ẩn",
    subtitle: "ぶんか",
    description: "Nghệ thuật bùng nổ. Giải mã ý nghĩa tên gọi từ thế giới nhẫn giả.",
    link: "/anime",
    IconComponent: (props) => <IconNumber number="05" {...props} />,
    indexStr: "05"
  },
  {
    title: "IT Chuyên Sâu",
    subtitle: "せんもん",
    description: "Kỹ thuật kiểm soát. Thuật ngữ IT tinh vi dành riêng cho lập trình viên.",
    link: "/vocab",
    IconComponent: (props) => <IconNumber number="06" {...props} />,
    indexStr: "06"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[1400px] mx-auto relative z-10 px-4 md:px-8 min-h-[calc(100vh-160px)] py-8">
      
      {/* Grid Layout */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full h-full py-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {homeModules.map((module) => (
          <CharacterCard key={module.indexStr} {...module} />
        ))}
      </motion.div>

    </div>
  );
}
