import { DeleteIcon } from "../../icons/DeleteIcon";
import { ShareIcon } from "../../icons/ShareIcon";

interface CardProp {
  title: string;
  link: string;
  type: string;
}

export function Card({ title, link, type }: CardProp) {
  return (
    <div className="w-80 h-96 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="p-6 pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
              <ShareIcon size="md" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg leading-tight">
              {title}
            </h3>
          </div>
          <div className="flex gap-2 items-center">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 text-gray-600"
            >
              <ShareIcon size="md" />
            </a>
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 text-gray-600 cursor-pointer">
              <DeleteIcon size="sm" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 flex-1">
        {type === "youtube" && (
          <div className="w-full h-64 rounded-lg overflow-hidden bg-gray-50">
            <iframe
              className="w-full h-full"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}
        {type === "twitter" && (
          <div className="w-full h-64 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
            <blockquote className="twitter-tweet w-full h-full">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
}
