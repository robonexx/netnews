import { RemoveDuplicateData } from "@/app/utils/RemoveDublicateData";
import { getTopNews } from "@/app/lib/api";

export const NewsList = async () => {
    const news = await getTopNews()
    const filterNews = RemoveDuplicateData(news)
  return (
    <div>
      
    </div>
  )
}
