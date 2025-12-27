import ProjectSetupForm from '@/Components/ProjectSetupForm';

export function ContextRequiredState({ onComplete }: { onComplete?: () => void }) {
    return (
        <div className="w-full">
            <ProjectSetupForm onComplete={onComplete} />
        </div>
    );
}
